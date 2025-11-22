import { EmailTemplate } from "@/lib/Email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const html = EmailTemplate(data)

    // Send email
 const res =   await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "saurabhgarkoti2@gmail.com", // Change this to your email
      subject: ` Portfolio Message from ${data.username}`,
      html
,
    });

    console.log(res);
    

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
