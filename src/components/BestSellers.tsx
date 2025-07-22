import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import data from "../data.json";
import { Link } from "react-router-dom";
import CartIcon from "../assets/icons/Cart";

import LeftArrow from "../assets/icons/LeftArrow";
import RightArrow from "../assets/icons/RightArrow";
import { AddToCartButton } from "./common/AddToCartButton";

const bestsellersProducts = data.Products.filter(
  (product) => product.category === "bestsellers"
);

export default function BestSellers() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="container">
      <div className="feature-con mt-70">
        <div className="bestsellers">
          <h2>BESTSELLERS</h2>
          <div className="thumb-nav-buttons">
            <button ref={prevRef} className="thumb-prev">
              <LeftArrow />
            </button>
            <button ref={nextRef} className="thumb-next">
              <RightArrow />
            </button>
          </div>
        </div>
        <div className="feature-box">
          <Swiper
            spaceBetween={20}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            modules={[Thumbs, FreeMode, Navigation]}
            className="main-swiper"
          >
            {bestsellersProducts.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="feature-box-inner" key={index}>
                  <Link to={`/product/${product.slug}`}>
                    <div className="feature-inner-box">
                      <div className="new-item">
                        <span>{product.status}</span>
                      </div>
                      <div className="feature-img">
                        <img
                          src={`../../src/assets/${product.image}`}
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
                      <div className="price">${product.price}</div>
                    </div>
                    <div className="cart-btn">
                      <div className="cart-btn">
                        <AddToCartButton product={product} key={product.id}/>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
