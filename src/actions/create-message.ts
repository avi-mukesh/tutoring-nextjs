"use server";
import * as nodemailer from "nodemailer";
import { revalidatePath } from "next/cache";
import { z } from "zod";

type ContactFormState = {
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  message?: string | null;
};

const ContactMessageSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

const CreateContactMessage = ContactMessageSchema.omit({ id: true });

export async function createMessage(
  formState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = CreateContactMessage.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Invalid data. Failed to send message.",
    };
  }

  const { name, email, message } = validatedFields.data;

  const transport = nodemailer.createTransport({
    host: "live.smtp.mailtrap.io",
    port: 587,
    auth: {
      user: "api",
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: "enquiries@mukeshacademy.com",
    to: "avimukesh10@gmail.com",
    subject: `Tutoring Enquiry ${name}`,
    text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
    `,
  };

  // Send the email
  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error:", error);
      return { message: "Failed to send email due to server error." };
    } else {
      console.log("Email sent: " + info.response);
      return { message: "Message sent" };
    }
  });

  revalidatePath("/dashboard/reading");
  return { message: "Message sent successfully" };
}
