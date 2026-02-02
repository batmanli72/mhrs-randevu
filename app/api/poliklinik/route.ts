import { NextResponse } from "next/server";

type Poliklinik = {
  id: number;
  name: string;
};

const poliklinikler: Poliklinik[] = [];


export async function POST(req: Request) {
  const body = await req.json();
  poliklinikler.push({ id: Date.now(), name: body.name });
  return NextResponse.json(poliklinikler);
}
