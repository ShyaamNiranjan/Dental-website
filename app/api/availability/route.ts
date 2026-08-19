import { NextRequest, NextResponse } from "next/server";
import { getBookedSlots } from "@/lib/data/queries";

export async function GET(request: NextRequest) {
  const date = request.nextUrl.searchParams.get("date");
  const dentistSlug = request.nextUrl.searchParams.get("dentistSlug");

  if (!date || !dentistSlug) {
    return NextResponse.json({ bookedSlots: [] });
  }

  const bookedSlots = await getBookedSlots(date, dentistSlug);
  return NextResponse.json({ bookedSlots });
}
