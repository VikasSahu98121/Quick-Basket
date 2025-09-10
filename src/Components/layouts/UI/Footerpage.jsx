import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegCopyright,
} from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { BsGooglePlay, BsApple } from "react-icons/bs";

// Category JSON data
const categoryData = [
  { slug: "fragrances", name: "Fragrances", url: "https://dummyjson.com/products/category/fragrances", image: "/perfume.jpeg" },
  { slug: "furniture", name: "Furniture", url: "https://dummyjson.com/products/category/furniture", image: "/funiure.jpeg" },
  { slug: "home-decoration", name: "Home Decoration", url: "https://dummyjson.com/products/category/home-decoration", image: "/homedecoration.jpg" },
  { slug: "kitchen-accessories", name: "Kitchen Accessories", url: "https://dummyjson.com/products/category/kitchen-accessories", image: "/kitchen.jpeg" },
  { slug: "laptops", name: "Laptops", url: "https://dummyjson.com/products/category/laptops", image: "/labtop.jpeg" },
  { slug: "mens-shirts", name: "Mens Shirts", url: "https://dummyjson.com/products/category/mens-shirts", image: "/menshirt.jpeg" },
  { slug: "mens-shoes", name: "Mens Shoes", url: "https://dummyjson.com/products/category/mens-shoes", image: "/menshoes.jpeg" },
  { slug: "mens-watches", name: "Mens Watches", url: "https://dummyjson.com/products/category/mens-watches", image: "/menwatch.jpeg" },
  { slug: "mobile-accessories", name: "Mobile Accessories", url: "https://dummyjson.com/products/category/mobile-accessories", image: "/mobile-accessories.jpeg" },
  { slug: "motorcycle", name: "Motorcycle", url: "https://dummyjson.com/products/category/motorcycle", image: "/motorcycle.jpg" },
  { slug: "skin-care", name: "Skin Care", url: "https://dummyjson.com/products/category/skin-care", image: "/skincare.jpeg" },
  { slug: "smartphones", name: "Smartphones", url: "https://dummyjson.com/products/category/smartphones", image: "/moblie.jpeg" },
  { slug: "sports-accessories", name: "Sports Accessories", url: "https://dummyjson.com/products/category/sports-accessories", image: "/sports.jpeg" },
  { slug: "sunglasses", name: "Sunglasses", url: "https://dummyjson.com/products/category/sunglasses", image: "/sun glass.jpg" },
  { slug: "tablets", name: "Tablets", url: "https://dummyjson.com/products/category/tablets", image: "/tablet.jpeg" },
  { slug: "tops", name: "Tops", url: "https://dummyjson.com/products/category/tops", image: "/tops.jpg" },
  { slug: "vehicle", name: "Vehicle", url: "https://dummyjson.com/products/category/vehicle", image: "/vechile.jpeg" },
  { slug: "womens-bags", name: "Womens Bags", url: "https://dummyjson.com/products/category/womens-bags", image: "/parse.jpeg" },
  { slug: "womens-dresses", name: "Womens Dresses", url: "https://dummyjson.com/products/category/womens-dresses", image: "/womenClothes.jpg" },
  { slug: "womens-jewellery", name: "Womens Jewellery", url: "https://dummyjson.com/products/category/womens-jewellery", image: "/women jewelly.jpg" },
  { slug: "womens-shoes", name: "Womens Shoes", url: "https://dummyjson.com/products/category/womens-shoes", image: "/womenshoes.jpeg" },
  { slug: "womens-watches", name: "Womens Watches", url: "https://dummyjson.com/products/category/womens-watches", image: "/womenwatch.jpg" },
];

export const Footerpage = () => {
  return (
    <footer className="bg-success text-white py-5">
      <Container>
        <Row>
          {/* Useful Links */}
          <Col xs={12} md={5}>
            <h6><strong>Useful Links</strong></h6>
            <Row>
              <Col xs={4}>
                <ul className="list-unstyled text-white">
                  <li>Blog</li>
                  <li>Privacy</li>
                  <li>Terms</li>
                  <li>FAQs</li>
                  <li>Security</li>
                  <li>Contact</li>
                </ul>
              </Col>
              <Col xs={4}>
                <ul className="list-unstyled text-white">
                  <li>Partner</li>
                  <li>Franchise</li>
                  <li>Seller</li>
                  <li>Warehouse</li>
                  <li>Deliver</li>
                  <li>Resources</li>
                </ul>
              </Col>
              <Col xs={4}>
                <ul className="list-unstyled text-white">
                  <li>Recipes</li>
                  <li>Bistro</li>
                </ul>
              </Col>
            </Row>
          </Col>

          {/* Categories */}
          <Col xs={12} md={7}>
            <h6><strong>Categories <a href="/categories" style={{ fontSize: "12px", marginLeft: "10px", color: "#ffffff", textDecoration: "underline" }}>see all</a></strong></h6>
            <Row>
              <Col xs={6} md={4}>
                <ul className="list-unstyled text-white">
                  {categoryData.slice(0, 8).map((cat, idx) => (
                    <li key={idx}>
                      <a href={cat.url} style={{ textDecoration: 'none', color: '#ffffff' }}>
                        {cat.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col xs={6} md={4}>
                <ul className="list-unstyled text-white">
                  {categoryData.slice(8, 16).map((cat, idx) => (
                    <li key={idx}>
                      <a href={cat.url} style={{ textDecoration: 'none', color: '#ffffff' }}>
                        {cat.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col xs={6} md={4}>
                <ul className="list-unstyled text-white">
                  {categoryData.slice(16).map((cat, idx) => (
                    <li key={idx}>
                      <a href={cat.url} style={{ textDecoration: 'none', color: '#ffffff' }}>
                        {cat.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>

        <hr style={{ margin: "30px 0", borderColor: "#ffffff" }} />

        <Row className="align-items-center text-center text-md-start pb-3">
          <Col md={6}>
            <p className="mb-2 mb-md-0" style={{ fontSize: "14px" }}>
              <FaRegCopyright /> QuickBasket Private Limited, 2016-2025
            </p>
          </Col>

          <Col md={3} className="text-md-center mb-3 mb-md-0">
            <strong style={{ fontSize: "15px" }}>Download App</strong><br />
            <BsApple size={28} style={{ marginRight: '12px', cursor: "pointer" }} />
            <BsGooglePlay size={28} style={{ cursor: "pointer" }} />
          </Col>

          <Col md={3} className="text-md-end">
            <FaFacebookF size={20} className="me-3" style={{ cursor: "pointer" }} />
            <FiX size={22} className="me-3" style={{ cursor: "pointer" }} />
            <FaInstagram size={20} className="me-3" style={{ cursor: "pointer" }} />
            <FaLinkedinIn size={20} className="me-3" style={{ cursor: "pointer" }} />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
