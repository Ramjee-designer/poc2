import Banner from "../components/common/Banner";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form submitted:", formData);
      setSubmitted(true);
      // Add your API call here if needed
    }
  };
  return (
    <>
      <section className="banner-bg">
        <Banner />
      </section>
      <section className="mt-70 mb-70">
        <div className="container">
          <form onSubmit={handleSubmit}>
          
            <div className="contact-form">
                  {submitted && (
              <p className="success-message">
                Thank you! Your message has been sent.
              </p>
            )}
              <h2 className="mb-20">Contact us</h2>
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
                    {errors.firstName && (
                      <p className="error">{errors.firstName}</p>
                    )}
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

                    <label htmlFor="lastname">Last Name *</label>
                    {errors.lastName && (
                      <p className="error">{errors.lastName}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="form-column-2">
                <div className="form-group">
                  <div className="input-group">
                    <input
                      type="email"
                      required
                      placeholder=" "
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />

                    <label htmlFor="address">Email *</label>
                    {errors.email && <p className="error">{errors.email}</p>}
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <input
                      type="text"
                      name="phone"
                      placeholder=" "
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <label htmlFor="apt">Phone</label>
                    {errors.phone && <p className="error">{errors.phone}</p>}
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <input
                    type="text"
                    required
                    placeholder=" "
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />

                  <label htmlFor="city">Address</label>
                  {errors.address && <p className="error">{errors.address}</p>}
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    cols="50"
                    placeholder=""
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <label htmlFor="message">Message</label>
                  {errors.message && <p className="error">{errors.message}</p>}
                </div>
              </div>
              <div className="mt-20">
                <button type="submit" className="primary-btn">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
