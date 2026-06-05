"use client";

import { useEffect } from "react";

/**
 * Mounts once (rendered at the bottom of the page) and wires up the three
 * imperative niceties from the design:
 *   1. scroll-reveal for any [data-reveal] element
 *   2. magnetic hover on [data-magnetic] buttons (pointer devices only)
 *   3. the sticky "Book a free call" pill (#stickyCta)
 *   4. the one-shot chalk underline draw in the hero
 */
export default function ClientEffects() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    // 1. Scroll reveal -------------------------------------------------------
    const reveals = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      reveals.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    } else {
      reveals.forEach((el) => el.classList.add("in"));
    }

    // 2. Magnetic buttons ----------------------------------------------------
    const canHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    if (canHover) {
      const strength = 0.32;
      document
        .querySelectorAll<HTMLElement>("[data-magnetic]")
        .forEach((btn) => {
          const move = (e: MouseEvent) => {
            const r = btn.getBoundingClientRect();
            const x = (e.clientX - r.left - r.width / 2) * strength;
            const y = (e.clientY - r.top - r.height / 2) * strength;
            btn.style.transform = `translate(${x}px, ${y}px)`;
          };
          const leave = () => {
            btn.style.transform = "";
          };
          btn.addEventListener("mousemove", move);
          btn.addEventListener("mouseleave", leave);
          cleanups.push(() => {
            btn.removeEventListener("mousemove", move);
            btn.removeEventListener("mouseleave", leave);
          });
        });
    }

    // 3. Sticky CTA ----------------------------------------------------------
    const stickyCta = document.getElementById("stickyCta");
    const hero = document.querySelector<HTMLElement>(".hero");
    const contact = document.getElementById("contact");
    if (stickyCta && hero && contact) {
      const toggle = () => {
        const past = window.scrollY > hero.offsetHeight * 0.8;
        const atContact =
          contact.getBoundingClientRect().top < window.innerHeight * 0.9;
        stickyCta.classList.toggle("show", past && !atContact);
      };
      window.addEventListener("scroll", toggle, { passive: true });
      toggle();
      cleanups.push(() => window.removeEventListener("scroll", toggle));
    }

    // 4. Hero underline draw -------------------------------------------------
    document
      .querySelector(".hl-word .underline path")
      ?.classList.add("drawn");

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
