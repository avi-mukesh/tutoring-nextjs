import React from "react";
import Heading from "./Heading";
import ImageWithCaption from "./ImageWithCaption";
import { Section, Flex } from "@radix-ui/themes";
import TutoringInfoCard from "./TutoringInfoCard";

const Tutoring = () => {
  return (
    <Section id="tutoring">
      <div>
        <Heading
          title="How it works"
          subtitle="Arrange a free 15 minute video call today."
        ></Heading>
        <Flex
          gap="2"
          justify="center"
          className="my-3 flex-col md:flex-row items-center"
        >
          <TutoringInfoCard
            header="Any Level"
            items={["Primary", "GCSE", "A-Level"]}
          />
          <TutoringInfoCard
            header="Any Topic"
            items={["Integration", "Vectors", "Statistics", "..."]}
          />
          <TutoringInfoCard
            header="Any Exam Board"
            items={["AQA", "Edexcel", "OCR"]}
          />
        </Flex>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center p-5 gap-8">
        <div>
          <p className="lead palanquin-light">All online.</p>
        </div>
        <ImageWithCaption
          src="/computer.webp"
          description="Computer on desk"
          width={400}
          height={320}
        />
      </div>
    </Section>
  );
};

export default Tutoring;
