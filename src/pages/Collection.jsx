import { useState } from "react";
import Banner from "../components/common/Banner";
import { Products } from "../data.json";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { AddToCartButton } from "../components/common/AddToCartButton";
import { getImageByFileName } from "../utils/images";

export default function Collection() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isCollection = location.pathname === "/collection";

  const [selectFeatured, setselectFeatured] = useState("");
  const handleChange = (event) => {
    setselectFeatured(event.target.value);
  };

  const [selectedProducts, setSelectedProducts] = useState(Products);

  return (
    <>
      <section>
        <div className="banner-bg">
          <Banner />
        </div>
      </section>
      <section className="mt-70 mb-70">
        <div className="container">
          <div className="collection-grid">
           

            <div className="filter-con">
              <div className="filter-item">
                <div className="filter-inner-title">Filter</div>
              </div>
              <div id="filterAccordion">
                <div className="filter-item">
                  <div className="filter-inner-title">Availability</div>
                  <div className="filter-content">
                    <input
                      type="checkbox"
                      id="brand"
                      name="brand"
                      value="In Stock"
                    />
                    <label for="brand">
                      In Stock <span>(21)</span>
                    </label>

                    <input
                      type="checkbox"
                      id="alita"
                      name="brand"
                      value="Out of Stock"
                    />
                    <label for="alita">
                      Out of Stock <span>(4)</span>
                    </label>
                  </div>
                </div>

                <div className="filter-item">
                  <div className="filter-inner-title">Brand</div>
                  <div className="filter-content">
                    <input
                      type="checkbox"
                      id="Octo"
                      name="brand"
                      value="Octo Finissimo"
                    />
                    <label for="Octo">Octo Finissimo</label>

                    <input
                      type="checkbox"
                      id="bulgari"
                      name="brand"
                      value="Bulgari"
                    />
                    <label for="bulgari">Bulgari</label>
                    <input
                      type="checkbox"
                      id="serpenti"
                      name="brand"
                      value="Serpenti"
                    />
                    <label for="serpenti">Serpenti</label>
                    <input
                      type="checkbox"
                      id="aluminum"
                      name="brand"
                      value="Aluminum"
                    />
                    <label for="aluminum">Aluminum</label>
                  </div>
                </div>
                <div className="filter-item">
                  <div className="filter-inner-title">Color</div>
                  <div className="filter-content">
                    <ul class="color-box filter-color">
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
                </div>
                <div className="filter-item">
                  <div className="filter-inner-title">Size</div>
                  <div className="filter-content">
                    <input type="checkbox" id="s" name="brand" value="S" />
                    <label for="s">
                      S <span>(05)</span>
                    </label>
                    <input type="checkbox" id="m" name="brand" value="M" />
                    <label for="m">
                      M <span>(07)</span>
                    </label>
                    <input type="checkbox" id="l" name="brand" value="L" />
                    <label for="l">
                      L <span>(08)</span>
                    </label>
                  </div>
                </div>
                <div className="filter-item">
                  <div className="filter-inner-title">Price</div>
                  <div className="filter-content">
                    <input
                      type="checkbox"
                      id="$20.00 - $22.00"
                      name="price"
                      value="price"
                    />
                    <label for="$20.00 - $22.00">$20.00 - $22.00</label>
                    <input
                      type="checkbox"
                      id="$25.00 - $27.00"
                      name="price"
                      value="price"
                    />
                    <label for="$25.00 - $27.00">$25.00 - $27.00</label>
                    <input
                      type="checkbox"
                      id="$28.00 - $30.00"
                      name="price"
                      value="price"
                    />
                    <label for="$28.00 - $30.00">$28.00 - $30.00</label>
                    <input
                      type="checkbox"
                      id="$48.00 - $53.00"
                      name="price"
                      value="price"
                    />
                    <label for="$48.00 - $53.00">$48.00 - $53.00</label>
                    <input
                      type="checkbox"
                      id="$61.00 - $64.00"
                      name="price"
                      value="price"
                    />
                    <label for="$61.00 - $64.00">$61.00 - $64.00</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="collection-grid-content">
              <div className="sortby">
                <div className="select-box">
                  <label htmlFor="productSize">Sort By</label>
                  <select
                    id="productSize"
                    value={selectFeatured}
                    onChange={handleChange}
                    className="selectbox"
                  >
                    <option value="">Featured</option>
                    <option value="Best Sellers">Best Sellers</option>
                    <option value="Low Price">Low Price</option>
                    <option value="High Price">High Price</option>
                  </select>

                  {/* {selectFeatured && <p>Selected Size: {selectFeatured}</p>} */}
                </div>
              </div>
              <div className="collection-grid-product feature-con">
                <div className="feature-box">
                  
                    {selectedProducts.map((product) => (
                      <div
                        className="feature-box-inner"
                        key={product.id + product.slug}
                      >
                        <Link to={`/product/${product.slug}`}>
                          <div className="feature-inner-box">
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
                          </div>
                        </Link>
                        <div className="product-bottom">
                          <div className="product-title-con">
                            <Link to={`/product/${product.slug}`}>
                              <h3 className="product-title">{product.title}</h3>
                            </Link>
                            <div className="price">$60.00</div>
                          </div>
                          <div className="cart-btn">
                            <button>
                              <AddToCartButton
                                product={product}
                                key={product.id}
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))};
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
