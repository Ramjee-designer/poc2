import React from "react";
import data from "../data.json"; // JSON path
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { Products } from "../data.json";
import { getImageByFileName } from "../utils/images";



const collectionProducts = data.Products.filter(
  (product) => product.category === "collection"
);



export default function Feature() {
  return (
    <div className="container">
      <div className="feature-con feature-divider mt-70">
        <ul className="feature-box">
          {collectionProducts.map((product, index) => (
            <li key={index} className="feature-box-inner">
              <div className="feature-inner-box collection-inner">
                <div className="new-item">
                  <span>{product.status}</span>
                </div>
                <div className="feature-img">
                  <img
                    src={getImageByFileName(product.image)} 
                    alt={product.title}
                    title={product.title}
                  />
                </div>
                <div className="feature-title">
                  <h3 className="product-title">{product.title}</h3>
                  <Link to={`/product/${product.slug}`} className="arrow-align">
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
