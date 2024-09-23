import React from "react";

type PropsType = {
  quote: string;
  studentName: string;
  yearGroup: number;
};

const TestimonialQuote = ({ quote, studentName, yearGroup }: PropsType) => {
  return (
    <figure className="text-center p-2 mb-4">
      <blockquote className="blockquote palanquin-medium text-lg">
        <p className="mb-2">{quote}</p>
      </blockquote>
      <figcaption className="atkinson-hyperlegible-regular">
        {studentName}
        {", Year "}
        {yearGroup}
      </figcaption>
    </figure>
  );
};

export default TestimonialQuote;
