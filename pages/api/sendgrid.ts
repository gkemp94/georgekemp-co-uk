import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

export default async function sendEmail(
  req: NextApiRequest,
  res: NextApiResponse<{ error: string }>
) {
  const { subject, message, name, email } = req.body!;
  try {
    await sendgrid.send({
      to: "georgekemp94@gmail.com",
      from: `${name}<contact@georgekemp.co.uk>`,
      replyTo: `${name}<${email}>`,
      subject: `${subject}`,
      html: `${message}`,
    });
  } catch (e) {
    const error = e as sendgrid.ResponseError;
    return res.status(500).send({ error: error.message });
  }
  res.status(200).send({ error: "" });
}
