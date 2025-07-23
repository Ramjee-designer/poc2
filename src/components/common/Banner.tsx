import { banner } from "../../../src/data.json";
import { Link, useLocation } from "react-router-dom";
import { flatsale } from "../../utils/images";
import { FaArrowRight } from "react-icons/fa";

export default function Banner() {
  const location = useLocation();
  const pathname = location.pathname;

  const getPageData = () => {
    switch (pathname) {
      case "/":
        return banner.homepage;
      case "/shop":
        return banner.collection;
      case "/product":
        return banner.product;
      case "/cart":
        return banner.cart;
      case "/checkout":
        return banner.checkout;
      case "/contact":
        return banner.contact;
      default:
        return banner.product;
    }
  };

  const pageData = getPageData();
  // console.log(location);
  // console.log("PageData:", pageData);
  return (
    <div className="container">
      <div className="banner-con">
        <div className="banner-left">
          {pageData && (
            <>
              <div className="sub-title">{pageData.subtitle}</div>
              <h1>{pageData.pagetitle}</h1>
            </>
          )}
        </div>
        <div className="flat-sale-circle">
          <div className="flat-sale">
            <img src={flatsale} alt="Flat sale" title="Flat sale" />
            <div className="gobtn">
              <div className="gobtn-inner">
                <Link to={"/shop"}>
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
          <p className="flate-sale-text">
            30% Flat Sale
            <br />
            Last-Minute Deals
          </p>
        </div>
      </div>
    </div>
  );
}
