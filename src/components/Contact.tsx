"use client";

import { useFormState } from "react-dom";
import * as Form from "@radix-ui/react-form";
import { useForm } from "react-hook-form";
import { createMessage } from "@/actions/create-message";
import SubmitButton from "./SubmitButton";

const Contact = () => {
  // ---- Backend wiring preserved exactly from the original ----
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createMessage, initialState);

  const {
    register,
    formState: { isValid },
  } = useForm({ mode: "all" });
  // ------------------------------------------------------------

  return (
    <section id="contact">
      <div className="wrap contact-grid">
        <div data-reveal>
          <span className="eyebrow">Drop me a message</span>
          <h2>Contact me.</h2>
          <p className="blurb">
            Tell me your year group, the topics you&apos;d like help with, and
            how often you&apos;d like lessons.
          </p>
          <ul className="contact-list">
            <li>
              <span>↳</span> Free 15-minute intro call
            </li>
            <li>
              <span>↳</span> Reply within a few hours
            </li>
            <li>
              <span>↳</span> First lesson booked in days
            </li>
          </ul>
        </div>

        <div data-reveal data-reveal-delay="1">
          <Form.Root action={dispatch}>
            <Form.Field className="field" name="name">
              <div className="field-top">
                <Form.Label>Name</Form.Label>
                <Form.Message className="err-msg" match="valueMissing">
                  Please enter your name
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  required
                  maxLength={100}
                />
              </Form.Control>
            </Form.Field>

            <Form.Field className="field" name="email">
              <div className="field-top">
                <Form.Label>Email</Form.Label>
                <Form.Message className="err-msg" match="valueMissing">
                  Please enter your email
                </Form.Message>
                <Form.Message className="err-msg" match="typeMismatch">
                  Please provide a valid email
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input
                  {...register("email", { required: "Email is required" })}
                  type="email"
                  required
                />
              </Form.Control>
            </Form.Field>

            <Form.Field className="field" name="message">
              <div className="field-top">
                <Form.Label>Message</Form.Label>
                <Form.Message className="err-msg" match="valueMissing">
                  Please enter a message
                </Form.Message>
              </div>
              <Form.Control asChild>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  required
                  rows={7}
                  maxLength={1500}
                  placeholder="Let me know the year you are in, the topics you would like help with, how often you would like lessons or any other questions you have."
                />
              </Form.Control>
            </Form.Field>

            <Form.Submit asChild>
              <SubmitButton message={state.message} disabledButton={!isValid} />
            </Form.Submit>
          </Form.Root>
        </div>
      </div>
    </section>
  );
};

export default Contact;
