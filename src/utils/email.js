import nodemailer from "nodemailer";

import { generateEmailContent } from "../pages/api/send-email";

export async function sendContactForm(formData) {
  fetch("/api/send-email", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });
}

export async function sendEmail({
  firstName,
  lastName,
  email,
  subject,
  message,
}) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: `"${firstName} ${lastName}" <${email}>`,
    to: process.env.EMAIL_USERNAME,
    subject: subject,
    ...generateEmailContent({ firstName, lastName, email, subject, message }),
  });

  console.log("Message sent: %s", info.messageId);
}
