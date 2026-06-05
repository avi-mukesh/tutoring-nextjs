"use client";

import { useEffect, useRef, useState } from "react";
import testimonials from "./testimonials-data";

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const count = testimonials.length;

  const go = (n: number) => setActive(((n % count) + count) % count);

  const reset = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => setActive((a) => (a + 1) % count), 6000);
  };

  useEffect(() => {
    reset();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handle = (n: number) => {
    go(n);
    reset();
  };

  return (
    <section className="voices" id="voices">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <span className="eyebrow">What others are saying</span>
          <h2>Voices.</h2>
        </div>

        <div className="quotes" data-reveal data-reveal-delay="1">
          {testimonials.map((t, i) => (
            <figure
              key={t.id}
              className={`quote${i === active ? " active" : ""}`}
            >
              <blockquote>{t.quote}</blockquote>
              <cite>{t.who}</cite>
            </figure>
          ))}
        </div>

        <div className="q-controls">
          <div className="dots">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                className={`dot${i === active ? " active" : ""}`}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => handle(i)}
              />
            ))}
          </div>
          <div className="arrows">
            <button
              className="arrow"
              aria-label="Previous"
              onClick={() => handle(active - 1)}
            >
              ‹
            </button>
            <button
              className="arrow"
              aria-label="Next"
              onClick={() => handle(active + 1)}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
