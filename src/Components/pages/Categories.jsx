import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AddCart } from '../Redux data/CartSlice';

const ProductGrid = () => {
  const dispatch=useDispatch();
  const products = useSelector((state) => state.products.Category);
//console.log(products)
  if (!products || !Array.isArray(products) || products.length === 0) {
    return <div className="text-center mt-5">No products available.</div>;
  }
  const addcart=(item)=>
  {
    console.log("kkkkkkkk",item)
     dispatch(AddCart(item));
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="card-title mb-1 text-truncate"  style={{ fontWeight: 'bold' }}>{products[0].category

}</div>
        {products.map((item) => (
          <div key={item.id} className="col-6 col-sm-4 col-md-3 mb-4">
            <div className="card h-100 position-relative border-0 shadow-sm rounded-3">

            
              {item.discountPercentage > 0 && (
                <span className="position-absolute top-0 start-0 bg-danger text-white px-2 py-1 rounded-end small fw-bold">
                  {Math.round(item.discountPercentage)}% OFF
                </span>
              )}

            
              <img
                src={item.thumbnail}
                className="card-img-top p-3"
                alt={item.title}
                style={{ height: '160px', objectFit: 'contain' }}
              />

          
              <div className="card-body p-2 d-flex flex-column justify-content-between">

              
                <h6 className="card-title mb-1 text-truncate" title={item.title} style={{ fontWeight: 'bold' }}>
                  {item.title}
                </h6>

                {/* Price */}
                <p className="mb-1 text-success fw-semibold small">
                  ${item.price.toFixed(2)}
                </p>

                {/* Stock + MOQ */}
                <p className="mb-1 text-muted small">
                  MOQ: {item.minimumOrderQuantity} | {item.stock > 0 ? "In Stock" : "Out of Stock"}
                </p>

                {/* Weight */}
                <p className="mb-1 text-muted small">
                  Weight: {item.weight}
                </p>

                {/* Shipping */}
                <p className="mb-1 text-muted small">
                  📦 {item.shippingInformation}
                </p>

                {/* Warranty */}
                <p className="mb-2 text-muted small">
                  🛡️ {item.warrantyInformation}
                </p>

                {/* Rating */}
                <div className="mb-3 text-warning small">
                  {'★'.repeat(Math.round(item.rating))}{'☆'.repeat(5 - Math.round(item.rating))} 
                  <span className="text-muted ms-1">({item.rating.toFixed(1)})</span>
                </div>

                {/* Add to Cart Button */}
                <button className="btn btn-sm btn-outline-success w-100 mt-auto" onClick={()=>addcart(item)}>
                  Add to Cart
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
