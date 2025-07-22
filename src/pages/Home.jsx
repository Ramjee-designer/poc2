import { banner } from "../data.json";
import Banner from "../components/common/Banner";
import { useLocation } from "react-router-dom";
import Feature from "../components/Feature";
import BestSellers from "../components/BestSellers";
import IconText from "../components/common/IconText";
import ImgText from "../components/ImgText";
import ImageAccordion from "../components/ImageAccordion";
import Categories from "../components/Categories";


export default function Home() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <>
      <section className="mid-con">
        <div className="banner-bg">
          <Banner />
          <Feature />
        </div>
      </section>
      <section>
        <BestSellers />
      </section>
      <section className="icon-text-container mt-70">
        <IconText />
      </section>
      <section>
        <Categories />
      </section>
      <section className="mt-70">
        <ImgText />
      </section>
      <section className="mt-70 mb-70">
        <ImageAccordion />
      </section>
    </>
  );
}
