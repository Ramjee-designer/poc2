import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode, Navigation } from "swiper/modules";
import { Products } from "../data.json";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { getImageByFileName } from "../utils/images";


import LeftArrow from "../assets/icons/LeftArrow";
import RightArrow from "../assets/icons/RightArrow";
// const images = [product1, product2, product3, product4, product5, product6];

export default function ProductGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
const productgallery = Products[0].galleryImages;
console.log(productgallery);

  return (
    <div className="product-gallery">
      {/* Main Swiper */}
      <Swiper
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Thumbs]}
        className="main-swiper"
      >
        {productgallery.map((product, index) => (
          <SwiperSlide key={index}>
            <img src={getImageByFileName(product.image)} alt={`Product ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Controls */}
      <div className="thumb-nav-buttons">
        <button ref={prevRef} className="thumb-prev">
          <LeftArrow />
        </button>
        <button ref={nextRef} className="thumb-next">
          <RightArrow />
        </button>
      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={8}
        loop={true}
        breakpoints={{
        320: {
          slidesPerView: 2.05,
        },
        640: {
          slidesPerView: 2.05,
        },
        768: {
          slidesPerView: 3.1,
        },
        1024: {
          slidesPerView: 4.1,
        },
      }}
        // slidesPerView={4.1}
        freeMode={true}
        watchSlidesProgress={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        modules={[Thumbs, FreeMode, Navigation]}
        className="thumb-swiper mt-2"
      >
        {productgallery.map((product, index) => (
          <SwiperSlide key={index}>
            <img src={getImageByFileName(product.image)} alt={`Thumb ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      
      </div>
    </div>
  );
}
