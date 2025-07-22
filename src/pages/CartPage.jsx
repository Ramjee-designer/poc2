// CartPage.js
import { useCart } from "../utils/CartContext";
import { Products } from "../data.json";
import { Link } from "react-router-dom";
import DeleteIcon from "../assets/icons/DeleteIcon";
import Banner from "../components/common/Banner";

export default function CartPage() {
  const {
    cartItems,
    updateQuantity,
    isDrawerOpen,
    setIsDrawerOpen,
    removeFromCart,
    clearCart,
  } = useCart();
  
    const subtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const tax = +(subtotal * 0.18).toFixed(2); 
    const grandTotal = +(subtotal + tax).toFixed(2);
  return (
    <>
    <section className="banner-bg">
      <Banner/>
    </section>
    <section className="mt-70 mb-70">
      <div className="container">
        <div className="cart-page">
          <div className="cart-product-left">
            <h2>Shopping Cart</h2>
            <div className="cart-items">
              {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                cartItems.map((product, index) => (
                  <div className="cart-item" key={index}>
                    <div className="cart-image">
                      <img
                        src={`../../src/assets/${product.image}`}
                        alt={product.title}
                        title={product.title}
                      />
                    </div>
                    <div className="cart-item-inner">
                      <div>
                      <Link to={`/product/${product.slug}`}>
                        <h3 className="product-title">{product.title}</h3>
                      </Link>
                      <p className="price">{product.price}</p>
                      <div className="quantity-delbtn">
                        <div className="quantity-controls">
                          <button
                            onClick={() =>
                              updateQuantity(
                                product.id,
                                product.quantity - 1,
                                product.inventoryQuantity
                              )
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
                                parseInt(e.target.value) || 1,
                                product.inventoryQuantity
                              )
                            }
                          />
                          <button
                            onClick={() =>
                              updateQuantity(
                                product.id,
                                product.quantity + 1,
                                product.inventoryQuantity
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>
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
                ))
              )}
            </div>
            <div className="mt-30"><Link to={"/checkout"} className="primary-btn">Continue Shopping</Link></div>
            {/* <button onClick={clearCart}>Clear Cart</button> */}
          </div>
          {/* <div className="cart-product-right">
            <div class="product-head">Order Summary</div>
            <ul className="cart-total-list mt-30">
              <li>
                <div class="list-t">Subtotal</div>
                <div class="list-t" id="cartTotal">$2314.76</div>
              </li>
              <li>
                <div class="list-t">Taxes</div>
                <div class="list-t" id="cartTotal">$22.76</div>
              </li>
              <li className="total-text">
                <div class="list-t">Total</div>
                <div class="list-t" id="cartTotal">$2314.76</div>
              </li>
            </ul>
          </div> */}
          <div className="order-summary">
              <h4>Order Summary</h4>
              <ul className="subtotal-list">
                <li>
                  <div>Subtotal :</div>
                  <div>${subtotal.toFixed(2)}</div>
                </li>
                <li>
                  <div>Tax (18%):</div>
                  <div>${tax}</div>
                </li>
                <li className="total-t">
                  <div>Total :</div>
                  <div>${grandTotal}</div>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </section>
    </>
  );
}
