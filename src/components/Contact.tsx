"use client";

import { useRef } from "react";
import { useFormState } from "react-dom";

import Heading from "./Heading";

import SubmitButton from "./SubmitButton";
import { motion, useScroll } from "framer-motion";
import { Section } from "@radix-ui/themes";
import * as Form from "@radix-ui/react-form";
import { createMessage } from "@/actions/create-message";
import { useForm } from "react-hook-form";

const Contact = () => {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createMessage, initialState);

  const {
    register,
    formState: { isValid },
  } = useForm({ mode: "all" });

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // const disabledButton = !details.name || !details.email || !details.message;

  return (
    <Section id="contact" className="h-screen w-[80%] mx-auto">
      <motion.div
        style={{ opacity: scrollYProgress }}
        className="p-10 shadow-2xl bg-white w-full flex flex-col items-center"
      >
        <Heading title="Contact me" subtitle="Drop me a message" />
        <Form.Root
          action={dispatch}
          className="w-[100%] md:w-[500px] mx-auto text-center"
        >
          <Form.Field className="grid mb-[10px]" name="name">
            <div className="flex items-baseline justify-between">
              <Form.Label className="text-[15px] font-medium leading-[35px] atkinson-hyperlegible-regular">
                Name
              </Form.Label>
              <Form.Message
                className="text-[13px] opacity-[0.8]"
                match="valueMissing"
              >
                Please enter your name
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                {...register("name", { required: "Name is required" })}
                className="bg-[#f5f5f0] box-border w-full shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 palanquin-light"
                type="text"
                required
                maxLength={100}
              />
            </Form.Control>
          </Form.Field>
          <Form.Field className="grid mb-[10px]" name="email">
            <div className="flex items-baseline justify-between">
              <Form.Label className="text-[15px] font-medium leading-[35px] atkinson-hyperlegible-regular">
                Email
              </Form.Label>
              <Form.Message
                className="text-[13px] opacity-[0.8]"
                match="valueMissing"
              >
                Please enter your email
              </Form.Message>
              <Form.Message
                className="text-[13px] opacity-[0.8]"
                match="typeMismatch"
              >
                Please provide a valid email
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                {...register("email", {
                  required: "Email is required",
                })}
                className="bg-[#f5f5f0] box-border w-full shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 palanquin-light"
                type="email"
                required
              />
            </Form.Control>
          </Form.Field>
          <Form.Field className="grid mb-[10px]" name="message">
            <div className="flex items-baseline justify-between atkinson-hyperlegible-regular">
              <Form.Label className="text-[15px] font-medium leading-[35px]">
                Message
              </Form.Label>
              <Form.Message
                className="text-[13px] opacity-[0.8]"
                match="valueMissing"
              >
                Please enter a message
              </Form.Message>
            </div>
            <Form.Control asChild>
              <textarea
                {...register("message", { required: "Message is required" })}
                className="bg-[#f5f5f0] box-border w-full shadow-blackA6 inline-flex appearance-none items-center justify-center p-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 resize-none palanquin-light"
                required
                placeholder="Let me know the year you are in, the topics you would like help with, how often you would like lessons or any other questions you have."
                rows={7}
                maxLength={1500}
              />
            </Form.Control>
          </Form.Field>
          <Form.Submit asChild>
            <SubmitButton message={state.message} disabledButton={!isValid} />
          </Form.Submit>
        </Form.Root>
      </motion.div>
    </Section>
  );
};

export default Contact;
