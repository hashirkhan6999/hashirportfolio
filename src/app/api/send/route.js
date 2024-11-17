import { NextResponse } from "next/server";

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log("Email:", email);
  console.log("Subject:", subject);
  console.log("Message:", message);

  // Simulate a successful response
  const data = {
    success: true,
    message: "This is a mock response since no API keys are provided.",
    submitted: { email, subject, message },
  };

  return NextResponse.json(data);
}
