import React, { useState } from "react";
import { Callout } from "@radix-ui/themes";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";

type PropsType = {
  submitForm: () => void;
  disabledButton: boolean;
};

function SubmitButton({ submitForm, disabledButton }: PropsType) {
  const [show, setShow] = useState(false);
  const onClick = () => {
    setShow(true);
    submitForm();
  };

  if (show) {
    return (
      <Callout.Root variant="outline" color="green" className="mx-auto">
        <Callout.Icon>
          <CheckCircledIcon />
        </Callout.Icon>
        <Callout.Text>
          Your message has been submitted. I will get back to you within a few
        </Callout.Text>
      </Callout.Root>
    );
  }
  return (
    <Button
      variant="surface"
      onClick={onClick}
      disabled={disabledButton}
      className="mx-auto"
    >
      Submit
    </Button>
  );
}

export default SubmitButton;
