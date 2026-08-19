import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { getAppointments } from "@/lib/data/queries";

export async function GET() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const appointments = await getAppointments();
  return NextResponse.json({ appointments });
}
