import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";
import { events } from "../../Data";
import "./events.css";
const Events = () => {
  return (
    <section className="events-section">
      <div className="section-container">
        <h2 className="section-title">Events</h2>
      </div>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        {events.map(({ name, date, image }, index) => {
          return (
            <SwiperSlide className="slider-items">
              <div className="slider-item">
                <img src={image} alt="" className="event-img" />
                <h1 className="event-title">{name}</h1>
                <h2 className="event-date">{date}</h2>
                <a href="" className="btn">
                  Apply Now!
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default Events;
