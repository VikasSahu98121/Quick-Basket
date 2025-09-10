import React, { useState } from 'react';
import { Navbar, Container, Form, FormControl, Button, Nav, NavDropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setShowModal, logoutUser } from '../../Redux data/Auth';
import { Login } from '../../pages/Login';
import { Category } from '../../../assets/api/AllCategorydata';
import { setCategory } from '../../Redux data/Product';
import { useNavigate, Link } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const cart = useSelector(state => state.cart || {});
  const cartItems = cart.Cart || [];
  const itemCount = cart.Counter || 0;
  const totalAmount = cart.Sum || 0;

  const [searchQuery, setSearchQuery] = useState('');

  const handleCart = () => navigate('/cart');

  const handleSearch = async () => {
    if (searchQuery.length >= 2) {
      try {
        const result = await Category(searchQuery);
        dispatch(setCategory(result.result.products));
        navigate(`/cartegory`);
      } catch (error) {
        console.error('Search API error:', error);
      }
    } else {
      alert('Please enter at least 2 characters to search.');
    }
  };

  return (
    <>
      <Navbar bg="success" expand="lg" className="shadow-sm py-2" sticky="top">
        <Container fluid>
          <Navbar.Brand className="fw-bold fs-3 text-white">
            <span>
              <span className="text-white">Quick</span>
              <span className="text-warning">Basket</span>
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <NavDropdown title="DELIVER TO YAMUNANAGAR" id="location-dropdown">
                <NavDropdown.Item as={Link} to="/">Change Location</NavDropdown.Item>
                <NavDropdown.Item href="#">Use Current Location</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Form
              className="d-flex w-50 mx-auto position-relative"
              onSubmit={(e) => { e.preventDefault(); handleSearch(); }}
            >
              <FormControl
                type="search"
                placeholder="Search for products"
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="warning" type="submit">Search</Button>
            </Form>

            <div className="d-flex gap-3 align-items-center">
              {/* LOGIN / LOGOUT */}
              {!auth.user ? (
                <Button
                  className="d-flex justify-content-center align-items-center px-3 py-1"
                  style={{ backgroundColor: 'white', color: 'black', border: '1px solid #ccc', height: '40px', fontSize: '14px' }}
                  onClick={() => dispatch(setShowModal(true))}
                >
                  Login
                </Button>
              ) : (
                <>
                  <span className="text-white fw-bold me-2">{auth.user.Username || auth.user.Email}</span>
                  <Button
                    className="d-flex justify-content-center align-items-center px-3 py-1"
                    style={{ backgroundColor: 'white', color: 'black', border: '1px solid red', height: '40px', fontSize: '14px' }}
                    onClick={() => dispatch(logoutUser())}
                  >
                    Logout
                  </Button>
                </>
              )}

          
              {cartItems.length > 0 && (
                <Button
                  className="d-flex flex-column justify-content-center align-items-center px-2 py-1 text-center"
                  style={{ backgroundColor: 'white', color: 'black', border: '1px solid green', height: '50px', fontSize: '12px', lineHeight: '1.1' }}
                  onClick={handleCart}
                >
                  <div className="fw-bold small">Cart</div>
                  <div className="small">Items: {itemCount}</div>
                  <div className="small">₹{totalAmount}</div>
                </Button>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    
      {auth.showModal && <Login showModal={auth.showModal} />}
    </>
  );
};
