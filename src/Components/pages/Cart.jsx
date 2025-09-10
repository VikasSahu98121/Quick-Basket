import { useSelector, useDispatch } from 'react-redux';
import { Card, Button, Row, Col, Image, ListGroup } from 'react-bootstrap';
import { AddCart, Removecart } from '../Redux data/CartSlice';

export const Cart = () => {
  const dispatch = useDispatch();
  const Cartitems = useSelector((state) => state.cart.Cart);
  const Totalitem = useSelector((state) => state.cart.Counter);
  const Totalamount = useSelector((state) => state.cart.Sum);

  const deliveryCharge = 10;
  const handlingCharge = 10;
  const smallCartCharge = 10;

  const hasItems = Cartitems.length > 0;

  const grandTotal = hasItems
    ? Totalamount + deliveryCharge + handlingCharge + smallCartCharge
    : 0;

  const handleAddToCart = (product) => {
    const alreadyInCart = Cartitems.some(item => item.id === product.id);
    if (!alreadyInCart) {
      dispatch(AddCart(product));
    }
  };

  const RemoveFromcart = (data) => {
    dispatch(Removecart(data));
  };

  return (
    <Card style={{ maxWidth: '600px', margin: '20px auto' }} className="p-3 shadow-sm">
      <h5 className="mb-3">🛒 Cart Summary</h5>

      {!hasItems ? (
        <div className="text-center text-muted p-4">
          <h6>Your cart is empty 🛍️</h6>
          <p>Start shopping to see your items here.</p>
        </div>
      ) : (
        <>
          <ListGroup className="mb-3">
            {Cartitems.map((product) => (
              <ListGroup.Item
                key={product.id}
                className="p-2 mb-2 border rounded"
                style={{ fontSize: '0.75rem' }}
              >
                <Row className="align-items-center">
                  <Col xs={2} className="px-1">
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      fluid
                      rounded
                      style={{ width: 40, height: 40, objectFit: 'cover' }}
                    />
                  </Col>

                  <Col xs={6} className="px-1">
                    <strong>{product.title}</strong>
                    <div className="text-muted">{product.brand}</div>
                    <div className="text-success">₹{product.price.toFixed(2)}</div>
                    <div className="text-muted">{product.category}</div>
                  </Col>

                  <Col xs={4} className="text-end px-1">
                    <div className="d-flex justify-content-end align-items-center mb-1">
                      <Button
                        size="sm"
                        variant="outline-secondary"
                        className="py-0 px-1"
                        onClick={() => RemoveFromcart(product)}
                      >−</Button>

                      <span className="mx-1">{Totalitem}</span>

                      <Button
                        size="sm"
                        variant="outline-secondary"
                        className="py-0 px-1"
                        onClick={() => handleAddToCart(product)}
                      >+</Button>

                      <Button
                        size="sm"
                        className="ml-2 p-1"
                        variant="success"
                        onClick={() => RemoveFromcart(product)}
                      >Remove</Button>
                    </div>
                    <Image
                      src={product.meta?.qrCode}
                      alt="QR"
                      style={{ width: 30, height: 30 }}
                      className="img-thumbnail"
                    />
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <div className="mb-3" style={{ fontSize: '0.8rem' }}>
            <Row>
              <Col>Amount</Col>
              <Col className="text-end">₹{Totalamount}</Col>
            </Row>
            <Row>
              <Col>Item Total</Col>
              <Col className="text-end">₹{Totalitem.toFixed(2)}</Col>
            </Row>
            <Row>
              <Col>Delivery</Col>
              <Col className="text-end">₹{deliveryCharge}</Col>
            </Row>
            <Row>
              <Col>Small Cart</Col>
              <Col className="text-end">₹{smallCartCharge}</Col>
            </Row>
            <hr />
            <Row>
              <Col><strong>Total</strong></Col>
              <Col className="text-end"><strong>₹{grandTotal.toFixed(2)}</strong></Col>
            </Row>
          </div>
        </>
      )}

      <div className="d-flex justify-content-between align-items-center">
        <h6 className="mb-0">Total: ₹{grandTotal.toFixed(2)}</h6>
        <Button size="sm" variant="success" disabled={!hasItems}>
          Login to Proceed
        </Button>
      </div>
    </Card>
  );
};
