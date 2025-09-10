import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { loginUser, setShowModal } from '../Redux data/Auth';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Login = ({ showModal }) => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [loggedUser, setLoggedUser] = useState(null);

  const loginFormik = useFormik({
    initialValues: { Email: '', Password: '' },
    validationSchema: yup.object({
      Email: yup.string().email().required('Enter email'),
      Password: yup.string().required('Enter password'),
    }),
    onSubmit: (values) => {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.Email === values.Email && u.Password === values.Password);
      if (user) {
        dispatch(loginUser(user));
        setLoggedUser(user);
      } else {
        alert('User not found or wrong password!');
      }
    },
  });

  const registerFormik = useFormik({
    initialValues: { Username: '', Email: '', Password: '', ConfirmPassword: '' },
    validationSchema: yup.object({
      Username: yup.string().required('Enter username'),
      Email: yup.string().email().required('Enter email'),
      Password: yup.string().required('Enter password'),
      ConfirmPassword: yup.string().oneOf([yup.ref('Password'), null], 'Passwords must match').required(),
    }),
    onSubmit: (values) => {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      users.push(values);
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registration successful');
      setIsLogin(true);
    },
  });

  const formik = isLogin ? loginFormik : registerFormik;
  const fields = Object.keys(formik.initialValues);

  return (
    <Modal
      show={showModal}
      onHide={() => dispatch(setShowModal(false))}
      centered
      className="shadow-lg"
    >
      <Modal.Header closeButton style={{ borderBottom: 'none' }}>
        <Modal.Title className="text-success d-flex align-items-center">
          {isLogin ? <i className="bi bi-box-arrow-in-right me-2"></i> : <i className="bi bi-pencil-square me-2"></i>}
          {loggedUser ? `Welcome, ${loggedUser.Username || loggedUser.Email}` : (isLogin ? 'Login' : 'Register')}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ backgroundColor: '#f8f9fa', borderRadius: '0 0 8px 8px', padding: '2rem' }}>
        {!loggedUser && (
          <form onSubmit={formik.handleSubmit}>
            {fields.map((key) => (
              <div key={key} className="mb-3 position-relative">
                <label className="form-label text-dark fw-semibold">{key}</label>
                <input
                  type={key.toLowerCase().includes('password') ? 'password' : 'text'}
                  {...formik.getFieldProps(key)}
                  className={`form-control ${formik.touched[key] && formik.errors[key] ? 'is-invalid' : ''}`}
                  style={{
                    borderColor: '#28a745',
                    paddingLeft: '2.8rem',
                    paddingTop: '0.6rem',
                    paddingBottom: '0.6rem',
                    height: '45px',
                    lineHeight: '1.5',
                    transition: '0.3s',
                  }}
                />
                <i
                  className={key.toLowerCase().includes('email') ? 'bi bi-envelope' : 'bi bi-lock'}
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '60%',
                    transform: 'translateY(-50%)',
                    color: '#28a745',
                    fontSize: '1.2rem',
                  }}
                ></i>
                {formik.errors[key] && <div className="invalid-feedback">{formik.errors[key]}</div>}
              </div>
            ))}

            <div className="d-flex justify-content-between mt-3">
              <Button
                variant="outline-secondary"
                onClick={() => dispatch(setShowModal(false))}
                className="fw-semibold shadow-sm"
                style={{ transition: '0.3s' }}
              >
                <i className="bi bi-x-circle me-1"></i> Close
              </Button>
              <Button
                type="submit"
                variant="success"
                className="fw-semibold shadow-sm"
                style={{ transition: '0.3s' }}
              >
                {isLogin ? <i className="bi bi-box-arrow-in-right me-1"></i> : <i className="bi bi-pencil-square me-1"></i>}
                {isLogin ? 'Login' : 'Register'}
              </Button>
            </div>
          </form>
        )}

        {!loggedUser && (
          <div className="text-center mt-3">
            <Button
              variant="link"
              onClick={() => setIsLogin(!isLogin)}
              className="text-success fw-bold"
            >
              {isLogin ? 'New user? Register' : 'Already registered? Login'}
            </Button>
          </div>
        )}
      </Modal.Body>

      <style jsx>{`
        input:focus {
          border-color: #28a745 !important;
          box-shadow: 0 0 8px rgba(40, 167, 69, 0.5);
        }
        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </Modal>
  );
};
