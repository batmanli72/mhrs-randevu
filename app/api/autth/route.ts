import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();

  const role =
    email.includes("admin")
      ? "ADMIN"
      : email.includes("doctor")
      ? "DOCTOR"
      : "USER";

  const res = NextResponse.json({ success: true });

  res.cookies.set("token", "fake-jwt", {
    httpOnly: true,
    path: "/",
  });

  res.cookies.set("role", role, {
    path: "/",
  });

  return res;
}
