import React, { useState } from "react";
import { categoriesTab, Products } from "../data.json";
import { Link } from "react-router-dom";
// import CartIcon from "../assets/icons/Cart";
import { useCart } from "../utils/CartContext";
import { AddToCartButton } from "./common/AddToCartButton";



export default function Categories() {
  const [activeTab, setActiveTab] = useState(categoriesTab[0]);
  const [selectedProducts, setselectedProducts] = useState(
    Products.filter((product) => product.Gender === "men")
  );

  const handleActiveTab = (tab) => {
    setActiveTab(tab);
    setselectedProducts(
      Products.filter((product) => product.Gender === tab.key)
    );
  };

 const { addToCart } = useCart();

  return (
    <div className="container">
      <div className="feature-con mt-70">
        <div className="categories-con">
          <h2>
            Explore our <br />
            Categories
          </h2>
          <div className="tab-buttons">
            {categoriesTab.map((tab, index) => (
              <button
                key={index}
                className={tab.key === activeTab.key ? "active" : ""}
                onClick={() => handleActiveTab(tab)}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>

        <div className="tab-content feature-box">
          {selectedProducts.slice(0, 5).map((product, index) => (
            <div className="feature-box-inner" key={index}>
              <Link to={`/product/${product.slug}`}>
                <div className="feature-inner-box">
                  <div className="new-item">
                    <span>{product.status}</span>
                  </div>
                  <div className="feature-img">
                    <img
                      src={`../../src/assets/${product.image}`}
                      alt={product.title}
                      title={product.title}
                    />
                  </div>
                </div>
              </Link>
              <div className="product-bottom">
                <div className="product-title-con">
                  <Link to={`/product/${product.slug}`}>
                    <h3 className="product-title">{product.title}</h3>
                  </Link>
                  <div className="price">${product.price}</div>
                </div>
                <div className="cart-btn">
                  <AddToCartButton product={product} key={product.id}/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
