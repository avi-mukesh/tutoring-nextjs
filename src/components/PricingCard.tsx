import React from "react";
import { Card, Text } from "@radix-ui/themes";

type PropsType = {
  level: string;
  price: string;
};

const PricingCard = ({ level, price }: PropsType) => {
  return (
    <Card variant="classic" className="mb-3 p-0 w-[100px] bg-slate-50">
      <Text as="div" className="text-center palanquin-regular">
        {level}
      </Text>
      <Text
        as="div"
        className="text-center palanquin-light"
      >{`£${price}`}</Text>
    </Card>
  );
};

export default PricingCard;
