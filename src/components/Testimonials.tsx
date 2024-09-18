"use client";

import React from "react";
import Heading from "./Heading";
import TestimonialQuote from "./TestimonialQuote";
import testimonials from "@/app/testimonials";
import { Section } from "@radix-ui/themes";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Testimonials = () => {
  return (
    <Section id="testimonials">
      <div className="row">
        <Heading title="What others are saying" />
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={6000}
          transitionDuration={500}
          keyBoardControl={true}
          infinite={true}
          showDots={true}
        >
          {testimonials.map((t) => (
            <TestimonialQuote
              key={t.id}
              quote={t.quote}
              studentName={t.studentName}
              yearGroup={t.yearGroup}
            />
          ))}
        </Carousel>
      </div>
    </Section>
  );
};

export default Testimonials;
