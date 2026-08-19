"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Appointment } from "@/types/database";
import { formatDate, formatTime } from "@/lib/utils";
import { CalendarDays, Clock, Mail, Phone, StickyNote, X } from "lucide-react";

const statusOptions = ["pending", "confirmed", "completed", "cancelled"] as const;

const statusColors: Record<string, string> = {
  pending: "bg-amber-50 text-amber-700 border-amber-200",
  confirmed: "bg-teal-50 text-teal-700 border-teal-200",
  completed: "bg-slate-100 text-slate-600 border-slate-200",
  cancelled: "bg-red-50 text-red-600 border-red-200",
};

export default function AdminAppointmentsPage() {
  const searchParams = useSearchParams();
  const highlightId = searchParams.get("id");

  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selected, setSelected] = useState<Appointment | null>(null);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/appointments")
      .then((r) => r.json())
      .then((data) => {
        const list: Appointment[] = data.appointments ?? [];
        setAppointments(list);
        if (highlightId) {
          const match = list.find((a) => a.id === highlightId);
          if (match) setSelected(match);
        }
        setLoading(false);
      });
  }, [highlightId]);

  async function updateStatus(id: string, status: string) {
    setUpdatingId(id);
    await fetch("/api/admin/update-status", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, type: "appointment", status }),
    });
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: status as Appointment["status"] } : a)),
    );
    if (selected?.id === id) {
      setSelected((prev) => prev ? { ...prev, status: status as Appointment["status"] } : prev);
    }
    setUpdatingId(null);
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Appointments</h1>
          <p className="mt-1 text-sm text-slate-500">{appointments.length} total appointments</p>
        </div>
      </div>

      <div className="flex gap-6">
        <div className={`flex-1 overflow-hidden rounded-2xl border border-slate-200 bg-white ${selected ? "hidden lg:block" : ""}`}>
          {loading ? (
            <div className="flex items-center justify-center py-20 text-sm text-slate-400">Loading...</div>
          ) : appointments.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <CalendarDays className="h-10 w-10 text-slate-300" aria-hidden="true" />
              <p className="mt-3 text-sm text-slate-500">No appointments yet</p>
            </div>
          ) : (
            <ul className="divide-y divide-slate-100">
              {appointments.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setSelected(item)}
                    className={`w-full text-left px-5 py-4 transition hover:bg-slate-50 ${selected?.id === item.id ? "bg-teal-50" : ""}`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="min-w-0">
                        <p className="truncate font-medium text-slate-900">{item.patient_name}</p>
                        <p className="mt-0.5 text-sm text-slate-500">
                          {formatDate(item.appointment_date)} at {formatTime(item.appointment_time)}
                        </p>
                        <p className="mt-0.5 text-xs text-slate-400">{item.patient_email}</p>
                      </div>
                      <span
                        className={`flex-shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize ${statusColors[item.status] ?? ""}`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {selected && (
          <div className="w-full lg:w-96 flex-shrink-0">
            <div className="sticky top-20 rounded-2xl border border-slate-200 bg-white overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                <h2 className="font-semibold text-slate-900">Appointment Detail</h2>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              <div className="p-5 space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Patient</p>
                  <p className="mt-1 text-base font-semibold text-slate-900">{selected.patient_name}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Mail className="h-4 w-4 text-slate-400" aria-hidden="true" />
                  <a href={`mailto:${selected.patient_email}`} className="hover:text-teal-800">{selected.patient_email}</a>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Phone className="h-4 w-4 text-slate-400" aria-hidden="true" />
                  <a href={`tel:${selected.patient_phone}`} className="hover:text-teal-800">{selected.patient_phone}</a>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CalendarDays className="h-4 w-4 text-slate-400" aria-hidden="true" />
                  {formatDate(selected.appointment_date)}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Clock className="h-4 w-4 text-slate-400" aria-hidden="true" />
                  {formatTime(selected.appointment_time)}
                </div>
                {selected.notes && (
                  <div className="flex items-start gap-2 text-sm text-slate-600">
                    <StickyNote className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" aria-hidden="true" />
                    <p>{selected.notes}</p>
                  </div>
                )}
                <div className="rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-500">
                  Code: <span className="font-mono font-medium">{selected.confirmation_code}</span>
                </div>

                <div className="border-t border-slate-100 pt-4">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">Update Status</p>
                  <div className="grid grid-cols-2 gap-2">
                    {statusOptions.map((status) => (
                      <button
                        key={status}
                        type="button"
                        disabled={updatingId === selected.id}
                        onClick={() => updateStatus(selected.id, status)}
                        className={`rounded-lg border px-3 py-2 text-xs font-semibold capitalize transition ${
                          selected.status === status
                            ? statusColors[status] + " ring-1 ring-inset ring-current"
                            : "border-slate-200 text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
