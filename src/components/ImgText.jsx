import data from "../data.json";

import { Link } from "react-router-dom";
import { ImgTextsection } from "../utils/images";


export default function ImgText() {
  return (
    <div className="container">
      <div className="image-text-con">
        <div className="text-content">
          <div className="sub-title">{data.ImageTextSection.subtitle}</div>
          <h2>{data.ImageTextSection.title}</h2>
          <p>{data.ImageTextSection.paragraph}</p>
          <div className="mt-30">
            <Link to={""} className="primary-btn">
              {data.ImageTextSection.button}
            </Link>
          </div>
        </div>
        <div className="image-banner">
          <img src={ImgTextsection} alt="Image" title="Image" />
        </div>
      </div>
    </div>
  );
}
