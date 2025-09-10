// Productdetails.js
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Spinner } from "./Spinner";
import { AddCart } from "../Redux data/CartSlice";
import {
  Container,
  Row,
  Col,
  Image,
  Badge,
  Button,
  ListGroup,
  Card
} from "react-bootstrap";
import { useDispatch } from "react-redux";

export const Productdetails = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProductData = async (id) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (param.id) {
      fetchProductData(param.id);
    }
  }, [param.id]);

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <Spinner state={loading} />
      </Container>
    );
  }

  if (!product) {
    return (
      <Container className="py-5 text-center">
        <p className="text-danger">Product not found.</p>
      </Container>
    );
  }

  const originalPrice = (product.price / (1 - product.discountPercentage / 100)).toFixed(2);

  const handleAddToCart = () => {
    dispatch(AddCart(product));
    // toast removed
  };

  return (
    <Container className="py-3">
      <Row className="mb-4">
        <Col md={5} className="text-center">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fluid
            style={{ maxHeight: "250px", objectFit: "contain" }}
          />
          <div className="mt-3">
            <Badge bg="success" className="px-3 py-2 fs-6">
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </Badge>
          </div>
        </Col>

        <Col md={7}>
          <h4 className="fw-bold">{product.title}</h4>
          <p className="text-muted small mb-1">
            {product.brand} • {product.category}
          </p>
          <p className="small text-muted">{product.description}</p>

          <h5 className="text-success fw-bold mb-0">₹{product.price}</h5>
          <span className="text-muted small">
            <s>₹{originalPrice}</s>
          </span>{" "}
          <Badge bg="warning" text="dark" className="ms-2">
            -{product.discountPercentage}%
          </Badge>

          <p className="mt-2 small text-muted">
            ⭐ <strong>{product.rating}</strong>/5
          </p>

          <div className="d-flex gap-2 mt-3">
            <Button variant="success" size="sm" onClick={handleAddToCart}>
              🛒 Add to Cart
            </Button>
            <Button variant="outline-primary" size="sm">
              ❤️ Wishlist
            </Button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card className="mb-3 shadow-sm">
            <Card.Body className="small text-muted">
              <Card.Title className="fs-6">🧾 Product Information</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>SKU:</strong> {product.id}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Stock:</strong> {product.stock} units
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Brand:</strong> {product.brand}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Category:</strong> {product.category}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="mb-2 shadow-sm">
            <Card.Body className="small text-muted">
              <Card.Title className="fs-3">🚚 Shipping & Warranty</Card.Title>
              <p>
                <strong>Shipping:</strong> Ships in 3–5 business days
              </p>
              <p>
                <strong>Warranty:</strong> 1 week warranty
              </p>
              <p>
                <strong>Return Policy:</strong> No return policy
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
