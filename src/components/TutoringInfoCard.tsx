import React from "react";
import { Card, Text } from "@radix-ui/themes";

type PropsType = {
  header: string;
  items: string[];
};

const TutoringInfoCard = ({ header, items }: PropsType) => {
  return (
    <Card variant="classic" className="p-0 w-[200px]">
      <Text
        align="center"
        as="div"
        size="2"
        weight="bold"
        mb="2"
        className="palanquin-regular"
      >
        {header}
      </Text>
      <div>
        <ul>
          {items.map((x) => (
            <li key={x} className="text-center palanquin-light">
              {x}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default TutoringInfoCard;
