"use client";

import React from "react";
import { Callout } from "@radix-ui/themes";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import { useFormStatus } from "react-dom";

type PropsType = {
  message: string | undefined | null;
  disabledButton: boolean;
};

function SubmitButton({ message, disabledButton }: PropsType) {
  const { pending } = useFormStatus();
  const submitted = message && message.length > 0;
  const disabled = pending || disabledButton;

  if (submitted) {
    return (
      <Callout.Root variant="surface" color="green" className="mx-auto">
        <Callout.Icon>
          <CheckCircledIcon />
        </Callout.Icon>
        <Callout.Text>
          Your message has been submitted. I will get back to you within a few
          hours.
        </Callout.Text>
      </Callout.Root>
    );
  }
  return (
    <Button
      variant="surface"
      disabled={disabled}
      className="mx-auto palanquin-medium text-lg"
      type="submit"
    >
      Submit
    </Button>
  );
}

export default SubmitButton;
