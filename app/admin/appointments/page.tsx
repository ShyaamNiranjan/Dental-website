"use client";

import { useEffect, useState } from "react";
import type { Appointment } from "@/types/database";
import { Card } from "@/components/ui/section";
import { formatDate, formatTime } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function AdminAppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    fetch("/api/admin/appointments")
      .then((response) => response.json())
      .then((data) => setAppointments(data.appointments ?? []));
  }, []);

  async function updateStatus(id: string, status: string) {
    await fetch("/api/admin/update-status", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, type: "appointment", status }),
    });
    setAppointments((current) =>
      current.map((item) => (item.id === id ? { ...item, status: status as Appointment["status"] } : item)),
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-semibold text-slate-900">Appointments</h1>
      <div className="mt-6 space-y-4">
        {appointments.map((item) => (
          <Card key={item.id}>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="font-semibold text-slate-900">{item.patient_name}</p>
                <p className="text-sm text-slate-600">{item.patient_email}</p>
                <p className="text-sm text-slate-600">{item.patient_phone}</p>
                <p className="mt-2 text-sm">
                  {formatDate(item.appointment_date)} at {formatTime(item.appointment_time)}
                </p>
                <p className="text-xs text-slate-500">Code: {item.confirmation_code}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["pending", "confirmed", "completed", "cancelled"].map((status) => (
                  <Button
                    key={status}
                    size="sm"
                    variant={item.status === status ? "primary" : "outline"}
                    onClick={() => updateStatus(item.id, status)}
                  >
                    {status}
                  </Button>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
