import React, { useContext, useEffect } from "react";
import { Virtual, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Swiper.css";
import { RecipeContext } from "../context/RecipeContext";

export default function App() {
  const { categories, swiperRef, setSwiperRef, setCategory, inputRef } =
    useContext(RecipeContext);
  const handleScroll = () =>
    window.scrollTo(0, inputRef.current.offsetTop - 50);

  useEffect(() => {
    // Trigger the 'slideNext' function to move to the next slide on load
    if (swiperRef) {
      swiperRef.slideNext(0); // Passing 0 for immediate transition
    }
  }, [swiperRef]);

  return (
    <div className="col-12 d-flex flex-row justify-content-evenly align-items-center mb-0">
      <div className="categories col-10 ">
        <p
          style={{
            position: "relative",
            filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.2))",
            color: "#48301a!important",
          }}
          className="cat-title cookit-font display-5 text-cookit col-lg-3 text-center">
          Categories{" "}
          <img
            style={{
              width: "5rem",
              position: "absolute",
              top: "-0.3rem",
              left: "-2rem",
              filter: "drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.2))",
            }}
            src={`${process.env.PUBLIC_URL}/imgs/pin.png`}
            alt=""
          />
        </p>
        <Swiper
          modules={[Virtual, Navigation]}
          onSwiper={setSwiperRef}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 20,
            }
          }}
          navigation={true}
          loop={true}
          virtual>
          {categories.map((category, index) => (
            <SwiperSlide
              style={{ backgroundImage: "url('./imgs/paper5.jpg')!important" }}
              key={category.id || index}
              virtualIndex={index}
              className="d-flex flex-column"
              onClick={() => {
                setCategory(category.strCategory);
                handleScroll();
              }}>
              <div className="col-7">
                <img
                  src={category.strCategoryThumb}
                  alt={category.strCategory}
                  className="category-img w-100"
                />
              </div>
              <p className="category-name text-cookit fs-3 cookit-font pt-2">
                {category.strCategory}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
