import Banner from "../components/common/Banner";
import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { checkoutAccordion } from "../data.json";
import { useCart } from "../utils/CartContext";

export default function Checkout() {
  const { cartItems, clearCart } = useCart();

  const location = useLocation();
  const isHome = location.pathname === "/";
  const isCheckout = location.pathname === "/checkout";

  const [activeIndex, setActiveIndex] = useState("Shipping address");

  const toggle = (key) => {
    setActiveIndex(activeIndex === key ? null : key);
  };
    const subtotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const tax = +(subtotal * 0.18).toFixed(2); 
    const grandTotal = +(subtotal + tax).toFixed(2);
  const CheckoutForm = (key) => {
    switch (key) {
      case "Shipping address":
        return (
          <form>
            <div className="shipping-form">
              <div className="form-column-2">
                <div className="form-group">
                  <div className="input-group">
                    <input
                      type="text"
                      required
                      placeholder=" "
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    <label htmlFor="name">First Name *</label>
                    {errors.firstName && <small>{errors.firstName}</small>}
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <input
                      type="text"
                      required
                      placeholder=" "
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                    {errors.lastName && <small>{errors.lastName}</small>}
                    <label htmlFor="lastname">Last Name *</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <input
                    type="text"
                    required
                    placeholder=" "
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleChange}
                  />
                  {errors.streetAddress && (
                    <small>{errors.streetAddress}</small>
                  )}
                  <label htmlFor="address">Street Address *</label>
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <input
                    type="text"
                    name="unit"
                    placeholder=" "
                    value={formData.unit}
                    onChange={handleChange}
                  />
                  <label htmlFor="apt">Apt/Unit(Optional)</label>
                </div>
              </div>
              <div className="form-column-2">
                <div className="form-group">
                  <div className="input-group">
                    <input
                      type="text"
                      required
                      placeholder=" "
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                    {errors.city && <small>{errors.city}</small>}
                    <label htmlFor="city">City *</label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder=" "
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                    />
                    {errors.postalCode && <small>{errors.postalCode}</small>}
                    <label htmlFor="postalcode">Postal Code *</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="shipping-method-con">
              <div className="shipping-info">
                <h4>Shipping Method</h4>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10" cy="10" r="10" fill="#3B2319" />
                  <path
                    d="M9.668 5.13C10.62 5.13 11.3807 5.39133 11.95 5.914C12.5287 6.43667 12.818 7.15067 12.818 8.056C12.818 8.99867 12.5193 9.708 11.922 10.184C11.3247 10.66 10.5313 10.898 9.542 10.898L9.486 12.004H8.1L8.03 9.806H8.492C9.39733 9.806 10.088 9.68467 10.564 9.442C11.0493 9.19933 11.292 8.73733 11.292 8.056C11.292 7.56133 11.1473 7.174 10.858 6.894C10.578 6.614 10.186 6.474 9.682 6.474C9.178 6.474 8.78133 6.60933 8.492 6.88C8.20267 7.15067 8.058 7.52867 8.058 8.014H6.56C6.56 7.454 6.686 6.95467 6.938 6.516C7.19 6.07733 7.54933 5.73667 8.016 5.494C8.492 5.25133 9.04267 5.13 9.668 5.13ZM8.772 15.098C8.48267 15.098 8.24 15 8.044 14.804C7.848 14.608 7.75 14.3653 7.75 14.076C7.75 13.7867 7.848 13.544 8.044 13.348C8.24 13.152 8.48267 13.054 8.772 13.054C9.052 13.054 9.29 13.152 9.486 13.348C9.682 13.544 9.78 13.7867 9.78 14.076C9.78 14.3653 9.682 14.608 9.486 14.804C9.29 15 9.052 15.098 8.772 15.098Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p>
                Enter your shipping address to view available shipping methods.
              </p>
              <div className="mt-40">
               <Link to={'/thankyou'} type="submit" className="primary-btn">
                  Continue
                </Link>
              </div>
            </div>
          </form>
        );

      case "Payment":
        return (
          <form>
            <div className="shipping-form">
              <div className="form-column-2">
                <div className="form-group">
                  <div className="input-group">
                    <input type="text" required placeholder=" " id="address" />
                    <label htmlFor="address">Card Number</label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <input type="text" required placeholder=" " id="apt" />
                    <label htmlFor="apt">CVC</label>
                  </div>
                </div>
              </div>
              <div className="">
                <button className="primary-btn">Pay now</button>
              </div>
            </div>
          </form>
        );

      case "Contact Information":
        return (
          <div className="shipping-form">
            <p>
              30, No Nona Danga
              <br />
              Road Sheoraphuli
              <br />
              Hooghly,
              <br />
              Kolkata - 712223
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  /* form validation */
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    unit: "",
    city: "",
    postalCode: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.streetAddress.trim())
      newErrors.streetAddress = "Street address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = "Postal code is required";
    } else if (!/^[A-Za-z0-9]{4,10}$/.test(formData.postalCode)) {
      newErrors.postalCode = "Invalid postal code format";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Optional: live clear error
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Continue to next step with:", formData);
      // Proceed to next step
    }
  };

  return (
    <>
      <div className="banner-bg">
        <Banner />
      </div>
      {/* <div>
      {cartItems.map((item, index) => (
        <p key={index}>{item.title} - {item.price}</p>
      ))}
      <button onClick={clearCart}>Place Order</button>
    </div>  */}
      <section className="mt-70 mb-70">
        <div className="container">
          <div className="checkout-mid-con">
            <div className="checkout-accordion-form">
              {checkoutAccordion.map((item) => (
                <div key={item.key} className="accordion-item">
                  <button
                    className="accordion-title checkout-title-head"
                    onClick={() => toggle(item.key)}
                  >
                    {item.title}
                    <span className="arrow">
                      {activeIndex === item.key ? "-" : "+"}
                    </span>
                  </button>

                  {activeIndex === item.key && <p>{CheckoutForm(item.key)}</p>}
                </div>
              ))}
            </div>
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
