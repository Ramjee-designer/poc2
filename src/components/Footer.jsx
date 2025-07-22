import { Link } from "react-router-dom";
import data from "../data.json";
import FooterTopOffers from "./common/FooterTopOffers";

export default function Footer() {
  const { FooterMenu } = data;
  return (
    <>
      <section className="footer-top-con">
        <FooterTopOffers />
      </section>
      <footer>
        <div className="container">
          <div className="footer-inner-menu">
            <div className="abut-store">
              <h4 className="footer-head">{data.aboutourstore.title}</h4>
              <p className="pt-8">{data.aboutourstore.paragraph}</p>
              <div className="phoneno">
                <strong>Phone:</strong>{" "}
                <Link to={`tel:${data.aboutourstore.phone}`}>
                  {data.aboutourstore.phone}
                </Link>
              </div>
              <div className="phoneno">
                <strong>Email:</strong>{" "}
                <Link to={`mailto:${data.aboutourstore.email}`}>
                  {data.aboutourstore.email}
                </Link>
              </div>
            </div>
            <div className="footer-menu">
              {Object.entries(FooterMenu).map(([sectionName, items], index) => (
                <div key={index} className="footer-menu-col">
                  <h4 className="footer-head">{sectionName}</h4>
                  <ul className="f-menu">
                    {items.map((item, i) =>
                      item.name ? (
                        <li key={i}>
                          <Link to={item.path}>{item.name}</Link>
                        </li>
                      ) : null
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="copyright mt-70">
          <h6>© 2025 Watches. All Rights Reserved.</h6>
        </div>
      </footer>
    </>
  );
}
