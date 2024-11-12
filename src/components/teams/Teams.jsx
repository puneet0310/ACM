import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { EffectCards } from "swiper/modules";
import "./teams.css";
import { Pagination } from "swiper/modules";
import "./teams.css";
import { office } from "../../Data";
import { technical } from "../../Data";
import { design } from "../../Data";
import { media } from "../../Data";
import { managment } from "../../Data";

const Teams = () => {
  return (
    <section className="team-section">
      <div className="team-container">
        <h1 className="section-title ">Our Team</h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {office.map(({ name, designation }, index) => {
            return (
              <SwiperSlide className="swiper-items">
                <div className="team-items">
                  <img src="" alt="image" />
                  <h1 className="office-name">{name}</h1>
                  <br />
                  <h2 className="office-designantion">{designation}</h2>
                  <a href="/" className="btn">
                    LinkedIn
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Teams;
