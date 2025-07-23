import { useCart } from "../utils/CartContext";
import React from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "../assets/icons/DeleteIcon";
import CloseIcon from "../assets/icons/CloseIcon";
import { getImageByFileName } from "../utils/images";

export default function CartDrawer() {
  const {
    cartItems,
    updateQuantity,
    isDrawerOpen,
    setIsDrawerOpen,
    removeFromCart,
  } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = +(subtotal * 0.18).toFixed(2); 
  const grandTotal = +(subtotal + tax).toFixed(2);

  return (
    <>
      <div className={`cart-drawer ${isDrawerOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2 className="drawer-heading">Your Cart</h2>
          <button className="close-btn" onClick={() => setIsDrawerOpen(false)}>
            <CloseIcon />
          </button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((product, index) => (
              <div className="cart-item" key={index}>
                <div className="cart-image">
                  <img
                    src={getImageByFileName(product.image)}
                    alt={product.title}
                    title={product.title}
                    width={50}
                  />
                </div>
                <div className="cart-item-inner">
                  <Link to={`/product/${product.slug}`}>
                    <h3 className="product-title">{product.title}</h3>
                  </Link>
                  <p className="price">${product.price * product.quantity}</p>
                  <div className="quantity-delbtn">
                    <div className="quantity-controls">
                      <button
                        disabled={product.quantity === 1}
                        onClick={() =>
                          updateQuantity(product.id, product.quantity - 1)
                        }
                      >
                        −
                      </button>
                      <input
                        type="number"
                        value={product.quantity}
                        min="1"
                        onChange={(e) =>
                          updateQuantity(
                            product.id,
                            parseInt(e.target.value) || 1
                          )
                        }
                      />
                      <button
                        onClick={() =>
                          updateQuantity(product.id, product.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="delete-btn"
                      onClick={() => removeFromCart(product.id)}
                      title="Remove"
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary">
              <div className="cart-value">
                <div>Subtotal:</div>
                <div>${subtotal.toFixed(2)}</div>
              </div>
              <div className="cart-value">
                <div>Tax (18%):</div>
                <div>${tax}</div>
              </div>
              <div className="cart-value">
                <div className="total-text">Total:</div>
                <div className="total-text">${grandTotal}</div>
              </div>
            </div>
            <Link
              to="/cart"
              onClick={() => setIsDrawerOpen(false)}
              className="secondary-btn d-block t-center"
            >
              View Cart
            </Link>
            <Link
              to={{
                pathname: "/checkout",
                state: { subtotal, tax, grandTotal },
              }}
              onClick={() => setIsDrawerOpen(false)}
              className="primary-btn d-block t-center mt-10"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>

      {isDrawerOpen && (
        <div className="cart-backdrop" onClick={() => setIsDrawerOpen(false)} />
      )}
    </>
  );
}
