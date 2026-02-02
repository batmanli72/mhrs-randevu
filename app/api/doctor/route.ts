import { NextResponse } from "next/server";

type Doctor = {
  id: number;
  name: string;
};

const doctors: Doctor[] = [];


export async function POST(req: Request) {
  const body = await req.json();
  doctors.push({ id: Date.now(), name: body.name });
  return NextResponse.json(doctors);
}
