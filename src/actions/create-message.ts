"use server";
import * as nodemailer from "nodemailer";
import { MailtrapTransport } from "mailtrap";
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
  email: z.string(),
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

  console.log(validatedFields);

  if (!validatedFields.success) {
    console.log(validatedFields.error.flatten().fieldErrors);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Invalid data. Failed to send message.",
    };
  }

  const { name, email, message } = validatedFields.data;

  const TOKEN = process.env.MAILTRAP_TOKEN as string;
  const transport = nodemailer.createTransport(
    MailtrapTransport({
      token: TOKEN,
    })
  );

  const mailOptions = {
    from: {
      address: "enquiries@mukeshacademy.com",
      name: "Enquiry"
    },
    to: ["avimukesh10@googlemail.com"],
    subject: `Tutoring Enquiry ${name}`,
    text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
    `,
  };

  console.log('!!! sending message', mailOptions);
  // Send the email
  transport.sendMail(mailOptions).then(console.log, console.error)
  console.log('!!! email sent')

  revalidatePath("/");
  return { message: "Message sent successfully" };
}
