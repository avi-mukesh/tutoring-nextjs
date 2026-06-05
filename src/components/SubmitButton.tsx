"use client";

import { useFormStatus } from "react-dom";

type PropsType = {
  message: string | undefined | null;
  disabledButton: boolean;
};

function SubmitButton({ message, disabledButton }: PropsType) {
  const { pending } = useFormStatus();
  const submitted = !!message && message.toLowerCase().includes("success");
  const disabled = pending || disabledButton;

  if (submitted) {
    return (
      <div className="success">
        <span className="ico">✓</span>
        <span>
          Your message has been submitted. I will get back to you within a few
          hours.
        </span>
      </div>
    );
  }

  return (
    <button type="submit" className="btn btn-fill" disabled={disabled}>
      {pending ? "Sending…" : "Submit"}
    </button>
  );
}

export default SubmitButton;
