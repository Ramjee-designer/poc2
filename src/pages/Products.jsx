import Banner from "../components/common/Banner";
import ProductGallery from "../components/ProductGallery";
import Tabs from "../components/Tabs";
import data from "../data.json";
import { Link, useLocation, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import SizeSelector from "../components/common/Size";
import { useCart } from "../utils/CartContext";

export default function Products() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isCollection = location.pathname === "/collection";

  const { slug } = useParams();
  const product = data.Products.find((p) => p.slug === slug);


  if (!product) {
    return <div>Product not found</div>;
  }
const { addToCart } = useCart();
  return (
    <>
      <section>
        <div className="banner-bg">
          <Banner />
        </div>
      </section>
      <section className="mt-70">
        <div className="container">
          <div className="product-details-con">
            <div className="gallery-con">
              <ProductGallery />
            </div>
            <div className="product-info">
              <div class="product-reviews">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <a class="review-link" href="#">
                  (05)
                </a>
              </div>
              <h2>{product.title}</h2>
              <div className="price">{product.price}</div>
              <p className="product-desription">{product.description}</p>
              <div className="mt-20">
                <div className="brand-t">
                  <strong>Brand :</strong> {product.brand}
                </div>
                <div className="brand-t">
                  <strong>Product Code :</strong> {product.sku}
                </div>
                <div className="brand-t">
                  <strong>Availability :</strong> {product.availability}
                </div>
              </div>
              
              <SizeSelector />
              <div class="color-con">
                <div class="size-text">Color :</div>
                <ul class="color-box">
                  <li>
                    <a href="#" class="black"></a>
                  </li>
                  <li>
                    <a href="#" class="orange"></a>
                  </li>
                  <li>
                    <a href="#" class="yellow"></a>
                  </li>

                  <li>
                    <a href="#" class="red"></a>
                  </li>

                  <li>
                    <a href="#" class="gray"></a>
                  </li>
                </ul>
              </div>
              <div className="addto-cart mt-30">
                 <button className="primary-btn" onClick={() => addToCart(product)}>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    {product.producttab &&
      <section className="mt-70 mb-70">
        <Tabs producttab={product.producttab} key={product.id} />
      </section>
    }
      

    </>
  );
}
