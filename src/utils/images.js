import logo from "../assets/logo.png";
import featureImage from "../assets/1.png"; 
import featureImage2 from "../assets/2.png"; 
import featureImage3 from "../assets/2.png"; 
import flatsale from "../assets/flatsale.png"; 

import Product1 from "../../src/assets/1.png"; 
import Product2 from "../../src/assets/2.png"; 
import Product3 from "../../src/assets/3.png"; 
import ImgTextbanner from "../../src/assets/3.png"; 
import p1 from "../../src/assets/p1.png"; 
import p2 from "../../src/assets/p2.png"; 
import p3 from "../../src/assets/p3.png"; 
import p4 from "../../src/assets/p4.png"; 
import p5 from "../../src/assets/p5.png"; 
import ImgAcc from "../../src/assets/acc-img.jpg";
import ImgTextsection from "../../src/assets/img-text.jpg";


const images = {
  "logo.png": logo,
  "p1.png": p1,
  "p2.png": p2,
  "p3.png": p3,
  "p4.png": p4,
  "p5.png": p5,
  "1.png": featureImage,
  "2.png": featureImage2,
  "3.png": featureImage3,
  "flatsale.png": flatsale,
  "product1.png": Product1,
  "product2.png": Product2,
  "product3.png": Product3,
  "imgtextbanner.png": ImgTextbanner,
  "acc-img.jpg":ImgAcc,
  "img-text.jpg":ImgTextsection,
};

// ✅ Function to get image by filename
export function getImageByFileName(filename) {
  return images[filename] || null;
}



export {logo, featureImage, featureImage2, featureImage3, flatsale, ImgAcc, Product1, Product2, Product3, ImgTextbanner, ImgTextsection};