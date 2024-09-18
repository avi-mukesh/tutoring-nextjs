let id = 0;

class Testimonial {
  quote: string;
  studentName: string;
  yearGroup: number;
  id: number;

  constructor(quote: string, studentName: string, yearGroup: number) {
    this.quote = quote;
    this.studentName = studentName;
    this.yearGroup = yearGroup;
    this.id = id++;
  }
}

const testimonials = [
  new Testimonial(
    "Luke did get 'greater depth' in his SATS which is great news! You helped him a lot. Many thanks 🙏.",
    "Luke E's mum",
    7
  ),
  new Testimonial(
    "Whenever I ask a question regarding the topic you quickly provide a response and a way of helping me understand",
    "Nafi",
    13
  ),
  new Testimonial(
    "I like how well you explain the origin of some theories which helps me understand the concepts further.",
    "James K",
    13
  ),
  new Testimonial(
    "I wish we found you earlier... Told all my friends about you... Thank you Avi for everything you did for Luke.",
    "Luke G's mum",
    13
  ),
  new Testimonial("Thank you so much for your support.", "Anthony's mum", 11),
];

export default testimonials;
