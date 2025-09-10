import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AddCart } from '../Redux data/CartSlice';

export const ProductCard = (props) => {
  const { thumbnail, title, weight, price, id } = props.data;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleproductdetail = (id) => {
    navigate(`/product/${id}`);
  };

  const handdleCartadd = (data) => {
    dispatch(AddCart(data));
  };

  return (
    <Card
      className="d-flex flex-column shadow-sm border-0 rounded-3 me-3"
      style={{ width: '180px', minHeight: '310px', backgroundColor: '#fff' }}
    >
      <div
        className="text-muted small px-2 pt-2"
        style={{ fontSize: '0.75rem' }}
      >
        🕒 8 MINS
      </div>

      <button
        onClick={() => handleproductdetail(id)}
        className="border-0 bg-transparent px-3 pt-2"
        style={{ cursor: 'pointer', textAlign: 'start' }}
      >
        <div
          className="bg-white d-flex align-items-center justify-content-center mb-2"
          style={{
            height: '100px',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <img
            src={thumbnail}
            alt={title}
            style={{ maxHeight: '90px', objectFit: 'contain' }}
          />
        </div>

        <div
          className="fw-semibold text-dark"
          style={{ fontSize: '1rem', height: '42px', overflow: 'hidden' }}
        >
          {title}
        </div>

        <div className="text-muted small">{weight}g</div>

        <div className="d-flex align-items-center justify-content-between mt-2 px-0">
          <div className="fw-bold">₹{price}</div>
          <Button
            variant="success"
            size="sm"
            className="fw-semibold rounded"
            onClick={() => handdleCartadd(props.data)}
          >
            ADD
          </Button>
        </div>
      </button>
    </Card>
  );
};
