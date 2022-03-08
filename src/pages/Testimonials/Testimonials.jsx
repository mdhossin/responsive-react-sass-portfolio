import React from "react";

// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import SubHeading from "../../components/SubHeading/SubHeading";
import { dataTestimonials } from "../../fakedata/fakeData";
import "./Testimonials.scss";

const Testimonials = () => (
  <section className="testimonials section">
    <SubHeading subtitle="Review from Clients" title="Testimonials" />

    <Swiper
      className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {dataTestimonials.map(({ avatar, name, review }, index) => (
        <SwiperSlide
          key={`index-${index}`}
          className="testimonials__testimonial"
        >
          <div className="testimonials__testimonial__client">
            <img src={avatar} alt="avatar" />
          </div>
          <h5 className="testimonials__testimonial__client-name">{name}</h5>
          <small className="testimonials__testimonial__client-review">
            {review}
          </small>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Testimonials;
