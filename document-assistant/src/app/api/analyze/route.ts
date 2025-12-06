import { NextResponse } from "next/server";
import { ANALYZE_DELAY_MS } from "@/constants/app";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.documentId) {
      return NextResponse.json(
        { status: "error", message: "Document ID is required" },
        { status: 400 }
      );
    }

    await new Promise((r) => setTimeout(r, ANALYZE_DELAY_MS));

    return NextResponse.json(
      {
        status: "success",
        message: "Document analyzed successfully",
        documentId: body.documentId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error analyzing document:", error);
    return NextResponse.json(
      { status: "error", message: "Failed to analyze document" },
      { status: 500 }
    );
  }
}
