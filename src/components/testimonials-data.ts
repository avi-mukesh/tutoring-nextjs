export type Testimonial = {
  id: number;
  quote: string;
  who: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Luke did get 'greater depth' in his SATS which is great news! You helped him a lot.",
    who: "Luke E's mum · Year 7",
  },
  {
    id: 2,
    quote:
      "Whenever I ask a question you quickly provide a response and a way of helping me understand.",
    who: "Nafi · Year 13",
  },
  {
    id: 3,
    quote:
      "I like how well you explain the origin of some theories, which helps me understand further.",
    who: "James K · Year 13",
  },
  {
    id: 4,
    quote: "I wish we found you earlier. I've told all my friends about you.",
    who: "Luke G's mum · Year 13",
  },
  {
    id: 5,
    quote:
      "I would highly recommend Avi to any student wanting to further their understanding of A-Level maths.",
    who: "Adil R's dad · Year 13",
  },
  {
    id: 6,
    quote: "Thank you so much for your support.",
    who: "Anthony's mum · Year 11",
  },
];

export default testimonials;
