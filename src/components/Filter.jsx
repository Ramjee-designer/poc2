import React from "react";

export default function Filter() {
  return (
    <>
      <div className="filter-con">
        <div className="filter-item">
          <div className="filter-inner-title">Filter</div>
        </div>
        <div id="filterAccordion">
          <div className="filter-item">
            <div className="filter-inner-title">Availability</div>
            <div className="filter-content">
              <input type="checkbox" id="brand" name="brand" value="In Stock" />
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

            {brands.map((brand) => (
              <>
               <input
                type="checkbox"
                id="Octo"
                checked={filters.brands.includes(brand)}
                onChange={() => handleCheckboxChange("brands", brand)}
              />
              <label for="Octo">{brand}</label>
              </>
              ))}

             

              {/* <input
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
              <label for="aluminum">Aluminum</label> */}
            </div>
          </div>
          {/* <div className="filter-item">
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
          </div> */}
          <div className="filter-item">
            <div className="filter-inner-title">Size</div>
            <div className="filter-content">
              {sizes.map((size) => (
                <>
              <input type="checkbox" id="s" name="brand" value="S" />
              <label for="s">
                S <span>(05)</span>
              </label>
              </>
              ))}
              {/* <input type="checkbox" id="m" name="brand" value="M" />
              <label for="m">
                M <span>(07)</span>
              </label>
              <input type="checkbox" id="l" name="brand" value="L" />
              <label for="l">
                L <span>(08)</span>
              </label> */}
            </div>
          </div>
          {/* <div className="filter-item">
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
          </div> */}
        </div>
      </div>
    </>
  );
}
