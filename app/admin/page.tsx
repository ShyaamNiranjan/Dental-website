import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { getAppointments, getEnquiries } from "@/lib/data/queries";
import { Card } from "@/components/ui/section";
import { formatDate, formatTime } from "@/lib/utils";

export default async function AdminDashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");

  const [appointments, enquiries] = await Promise.all([
    getAppointments(),
    getEnquiries(),
  ]);

  const pendingAppointments = appointments.filter(
    (item) => item.status === "pending",
  ).length;
  const newEnquiries = enquiries.filter((item) => item.status === "new").length;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">Admin Dashboard</h1>
          <p className="mt-2 text-sm text-slate-600">
            Signed in as {user.email}
          </p>
        </div>
        <form action="/admin/logout" method="post">
          <button
            type="submit"
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700"
          >
            Sign out
          </button>
        </form>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <Card>
          <p className="text-sm text-slate-500">Total appointments</p>
          <p className="mt-2 text-3xl font-semibold">{appointments.length}</p>
        </Card>
        <Card>
          <p className="text-sm text-slate-500">Pending appointments</p>
          <p className="mt-2 text-3xl font-semibold">{pendingAppointments}</p>
        </Card>
        <Card>
          <p className="text-sm text-slate-500">New enquiries</p>
          <p className="mt-2 text-3xl font-semibold">{newEnquiries}</p>
        </Card>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recent appointments</h2>
            <Link href="/admin/appointments" className="text-sm text-teal-800">
              View all
            </Link>
          </div>
          <div className="space-y-3">
            {appointments.slice(0, 5).map((item) => (
              <Card key={item.id} className="p-4">
                <p className="font-medium text-slate-900">{item.patient_name}</p>
                <p className="text-sm text-slate-600">
                  {formatDate(item.appointment_date)} at {formatTime(item.appointment_time)}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wide text-teal-700">
                  {item.status}
                </p>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recent enquiries</h2>
            <Link href="/admin/enquiries" className="text-sm text-teal-800">
              View all
            </Link>
          </div>
          <div className="space-y-3">
            {enquiries.slice(0, 5).map((item) => (
              <Card key={item.id} className="p-4">
                <p className="font-medium text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-600">{item.email}</p>
                <p className="mt-2 line-clamp-2 text-sm text-slate-600">
                  {item.message}
                </p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
