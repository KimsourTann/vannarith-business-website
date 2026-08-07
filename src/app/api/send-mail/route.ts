import { transporter } from "@/config/nodemailer";

export async function POST(request: Request) {
  const res = await request.json();
  await transporter.sendMail(res);
  return new Response();
}