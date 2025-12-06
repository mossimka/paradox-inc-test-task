import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await new Promise(r => setTimeout(r, 2000));
  return NextResponse.json({ status: "200", message: "Document analyzed successfully" });
}