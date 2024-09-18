"use client";

import { useRef, useState } from "react";
import Heading from "./Heading";

import SubmitButton from "./SubmitButton";
import { motion, useScroll } from "framer-motion";
import { Section } from "@radix-ui/themes";
import * as Form from "@radix-ui/react-form";

const Contact = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const [details, setDetails] = useState({ name: "", email: "", message: "" });

  const disabledButton = !details.name || !details.email || !details.message;

  const onChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDetails({ ...details, [event.target.name]: event.target.value });
  };

  const onSubmit = async () => {
    try {
      console.log(details);
      //   await addDoc(collection(db, "contacts"), details);
      const url =
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000/send-email"
          : "https://tutoring-backend-pj2z.onrender.com/send-email";
      await fetch(url, {
        method: "POST",
        body: JSON.stringify(details),
        headers: { "Content-Type": "application/json" },
      });
    } catch (e) {
      console.error("Error sending email", e);
    }
  };
  return (
    <Section id="contact" className="h-screen w-[80%] mx-auto">
      <motion.div
        style={{ opacity: scrollYProgress }}
        className="p-10 shadow-2xl bg-white w-full flex flex-col items-center"
      >
        <Heading title="Contact me" subtitle="Drop me a message" />
        {/* <form>
          <fieldset className="container">
            <Flex direction="column">
              <div className="form-group col-12 mt-2">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={details.name}
                  onChange={onChange}
                  maxLength={100}
                />
              </div>
              <div className="form-group col-12 mt-2">
                <label htmlFor="email">Your email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  value={details.email}
                  onChange={onChange}
                  maxLength={200}
                />
              </div>
              <div className="form-group col-12 mt-2">
                <label htmlFor="exampleTextarea" className="form-label">
                  Your message
                </label>
                <textarea
                  className="form-control"
                  id="exampleTextarea"
                  rows={6}
                  name="message"
                  value={details.message}
                  onChange={onChange}
                  placeholder="Let me know the year you are in, the topics you would like help with, how often you would like lessons or any other questions you have."
                  maxLength={1500}
                ></textarea>
              </div>
              <div className="form-group col-12 mt-4">
                <SubmitButton
                  submitForm={onSubmit}
                  disabledButton={disabledButton}
                />
              </div>
            </Flex>
          </fieldset>
        </form> */}
        <Form.Root className="w-[100%] md:w-[500px] mx-auto text-center">
          <Form.Field className="grid mb-[10px]" name="name">
            <div className="flex items-baseline justify-between">
              <Form.Label className="text-[15px] font-medium leading-[35px]">
                Name
              </Form.Label>
              <Form.Message
                className="text-[13px] text-white opacity-[0.8]"
                match="valueMissing"
              >
                Please enter your name
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                type="text"
                required
                onChange={onChange}
                value={details.name}
              />
            </Form.Control>
          </Form.Field>
          <Form.Field className="grid mb-[10px]" name="email">
            <div className="flex items-baseline justify-between">
              <Form.Label className="text-[15px] font-medium leading-[35px]">
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
                className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                type="email"
                required
                onChange={onChange}
                value={details.email}
              />
            </Form.Control>
          </Form.Field>
          <Form.Field className="grid mb-[10px]" name="message">
            <div className="flex items-baseline justify-between">
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
                className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 resize-none"
                required
                onChange={onChange}
                value={details.message}
                placeholder="Let me know the year you are in, the topics you would like help with, how often you would like lessons or any other questions you have."
                rows={6}
                maxLength={1500}
              />
            </Form.Control>
          </Form.Field>
          <Form.Submit asChild>
            {/* <button className="box-border w-full text-violet11 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
              Post question
            </button> */}
            <SubmitButton
              submitForm={onSubmit}
              disabledButton={disabledButton}
            />
          </Form.Submit>
        </Form.Root>
      </motion.div>
    </Section>
  );
};

export default Contact;
