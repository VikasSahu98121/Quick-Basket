import React from 'react'
import categories from '../../assets/api/categories.json'
import { ApidataCategory } from '../../assets/api/Categoryapi'
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setCategory } from '../Redux data/Product';
import { useNavigate } from 'react-router-dom';

const CategoriesBanner = () => {
  const dispatch = useDispatch();
  const navigateto = useNavigate();

  const ShowCategorieslist = async (category) => {
    const result = await ApidataCategory(category);
    dispatch(setCategory(result.result.data.products));
    navigateto(`/cartegory`);
  }

  return (
    <Container fluid className="bg-light rounded-4">
      <Row className="justify-content-center g-4">
        {categories.map((category, index) => (
          <Col
            key={index}
            xs={6}
            sm={4}
            md={2}
            className="text-center"
          >
            <button
              onClick={() => ShowCategorieslist(category)}
              className="border rounded-4 bg-white shadow-sm p-3 d-flex flex-column align-items-center w-100"
              style={{
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                borderColor: '#198754',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(25,135,84,0.25)';
                e.currentTarget.style.borderColor = '#145c32';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.boxShadow = '0 .5rem 1rem rgba(0,0,0,.15)';
                e.currentTarget.style.borderColor = '#198754';
              }}
            >
              <div
                style={{
                  height: '90px',
                  width: '90px',
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  border: '2px solid #198754',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  style={{
                    maxHeight: '100%',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
              </div>
              <div
                className="fw-semibold text-success text-center mt-3"
                style={{ whiteSpace: 'normal', fontSize: '0.9rem' }}
              >
                {category.name}
              </div>
            </button>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default CategoriesBanner;

