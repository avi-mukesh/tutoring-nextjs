import React from "react";
import Heading from "./Heading";
import PricingCard from "./PricingCard";
import { Flex, Section, Text } from "@radix-ui/themes";

const Pricing = () => {
  return (
    <Section
      id="pricing"
      className="flex flex-column justify-center items-center h-screen"
    >
      <div>
        <Heading title="Pricing" subtitle="Starting hourly rates by level" />
        <Flex gap="2" justify="center" className="my-3">
          <PricingCard level="A-Level" price="40*" />
          <PricingCard level="GCSE" price="30" />
          <PricingCard level="Primary" price="20" />
        </Flex>
        <Text as="div" align="center" className="text-sm">
          *Further maths is an additional £5.
        </Text>
      </div>
    </Section>
  );
};

export default Pricing;
