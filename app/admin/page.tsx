import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { getAppointments, getEnquiries } from "@/lib/data/queries";
import { formatDate, formatTime } from "@/lib/utils";
import { CalendarDays, CheckCircle2, Clock, MessageSquare, TrendingUp } from "lucide-react";

const statusColors: Record<string, string> = {
  pending: "bg-amber-50 text-amber-700 border-amber-200",
  confirmed: "bg-teal-50 text-teal-700 border-teal-200",
  completed: "bg-slate-100 text-slate-600 border-slate-200",
  cancelled: "bg-red-50 text-red-600 border-red-200",
  new: "bg-blue-50 text-blue-700 border-blue-200",
  in_progress: "bg-amber-50 text-amber-700 border-amber-200",
  resolved: "bg-slate-100 text-slate-600 border-slate-200",
};

export default async function AdminDashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const [appointments, enquiries] = await Promise.all([
    getAppointments(),
    getEnquiries(),
  ]);

  const pending = appointments.filter((a) => a.status === "pending").length;
  const confirmed = appointments.filter((a) => a.status === "confirmed").length;
  const newEnq = enquiries.filter((e) => e.status === "new").length;
  const total = appointments.length;

  const stats = [
    { label: "Total Appointments", value: total, icon: CalendarDays, color: "text-slate-700" },
    { label: "Pending Review", value: pending, icon: Clock, color: "text-amber-600" },
    { label: "Confirmed", value: confirmed, icon: CheckCircle2, color: "text-teal-600" },
    { label: "New Enquiries", value: newEnq, icon: MessageSquare, color: "text-blue-600" },
  ];

  return (
    <div>
      <div className="mb-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
            <p className="mt-1 text-sm text-slate-500">
              Welcome back, {user.email} &mdash; Prestige Dental Beverly Hills
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/admin/appointments"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              All Appointments
            </Link>
          </div>
        </div>
      </div>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-500">{label}</p>
              <Icon className={`h-5 w-5 ${color}`} aria-hidden="true" />
            </div>
            <p className="mt-3 text-3xl font-semibold text-slate-900">{value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-semibold text-slate-900">Recent Appointments</h2>
            <Link href="/admin/appointments" className="text-sm font-medium text-teal-700 hover:text-teal-900">
              View all →
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {appointments.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <TrendingUp className="h-8 w-8 text-slate-300" aria-hidden="true" />
                <p className="mt-3 text-sm text-slate-500">No appointments yet</p>
              </div>
            ) : (
              <ul className="divide-y divide-slate-100">
                {appointments.slice(0, 6).map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/admin/appointments?id=${item.id}`}
                      className="flex items-center justify-between px-5 py-4 transition hover:bg-slate-50"
                    >
                      <div className="min-w-0">
                        <p className="truncate font-medium text-slate-900">{item.patient_name}</p>
                        <p className="mt-0.5 text-sm text-slate-500">
                          {formatDate(item.appointment_date)} at {formatTime(item.appointment_time)}
                        </p>
                      </div>
                      <span
                        className={`ml-4 flex-shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize ${statusColors[item.status] ?? ""}`}
                      >
                        {item.status}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-semibold text-slate-900">Recent Enquiries</h2>
            <Link href="/admin/enquiries" className="text-sm font-medium text-teal-700 hover:text-teal-900">
              View all →
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {enquiries.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <MessageSquare className="h-8 w-8 text-slate-300" aria-hidden="true" />
                <p className="mt-3 text-sm text-slate-500">No enquiries yet</p>
              </div>
            ) : (
              <ul className="divide-y divide-slate-100">
                {enquiries.slice(0, 6).map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/admin/enquiries?id=${item.id}`}
                      className="flex items-center justify-between px-5 py-4 transition hover:bg-slate-50"
                    >
                      <div className="min-w-0">
                        <p className="truncate font-medium text-slate-900">{item.name}</p>
                        <p className="mt-0.5 truncate text-sm text-slate-500">{item.message}</p>
                      </div>
                      <span
                        className={`ml-4 flex-shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize ${statusColors[item.status] ?? ""}`}
                      >
                        {item.status.replace("_", " ")}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
