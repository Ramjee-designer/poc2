import { useState } from "react";
// import data from "../data.json";
import ImgAcc from "../../src/assets/acc-img.jpg";
import { Link } from "react-router-dom";
import Accordion from "./common/Accordion";


export default function ImageAccordion() {

  return (
    <div className="container">
      <div className="image-acc-con">
        <div className="image-con">
          <img src={ImgAcc} alt="Image" title="Image" />
        </div>
        <div className="accordion-con">
          <h3>GOT Questions? We’ve got answers</h3>
          <p>
            Timeless, the Bvlgari Bvlgari watch has embodied the bold creativity and unique style of Bvlgari for over 40 years.
          </p>
          <Accordion />
        </div>
      </div>
    </div>
  );
}
