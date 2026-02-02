import { appointments } from "@/app/lib/store";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  appointments.push({
    id: Date.now(),
    patientName: body.patientName,
    doctorName: body.doctorName,
    date: body.date,
    approved: false,
  });

  return NextResponse.json({ success: true });
}

export async function GET() {
  return NextResponse.json(appointments);
}
