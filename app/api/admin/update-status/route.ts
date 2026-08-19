import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function PATCH(request: NextRequest) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { id, type, status } = body as {
    id: string;
    type: "appointment" | "enquiry";
    status: string;
  };

  const table = type === "appointment" ? "appointments" : "contact_enquiries";
  const { error } = await supabase.from(table).update({ status }).eq("id", id);

  if (error) {
    return NextResponse.json({ error: "Unable to update record." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
