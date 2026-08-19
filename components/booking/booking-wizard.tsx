"use client";

import { useMemo, useState } from "react";
import { dentists, services, timeSlots } from "@/lib/constants/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/section";
import { CheckCircle2 } from "lucide-react";

type Step = 1 | 2 | 3 | 4 | 5;

type BookingState = {
  serviceSlug: string;
  dentistSlug: string;
  appointmentDate: string;
  appointmentTime: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  notes: string;
};

const initialState: BookingState = {
  serviceSlug: "",
  dentistSlug: "",
  appointmentDate: "",
  appointmentTime: "",
  patientName: "",
  patientEmail: "",
  patientPhone: "",
  notes: "",
};

export function BookingWizard() {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<BookingState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState<{
    code: string;
    message: string;
  } | null>(null);
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);

  const selectedService = services.find((item) => item.slug === form.serviceSlug);
  const selectedDentist = dentists.find((item) => item.slug === form.dentistSlug);

  const minDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date.toISOString().split("T")[0];
  }, []);

  async function loadAvailability() {
    if (!form.appointmentDate || !form.dentistSlug) return;
    const params = new URLSearchParams({
      date: form.appointmentDate,
      dentistSlug: form.dentistSlug,
    });
    const response = await fetch(`/api/availability?${params.toString()}`);
    const data = await response.json();
    setBookedSlots(data.bookedSlots ?? []);
  }

  async function handleNext() {
    setErrors({});
    if (step === 1 && !form.serviceSlug) {
      setErrors({ serviceSlug: "Select a service to continue." });
      return;
    }
    if (step === 2 && !form.dentistSlug) {
      setErrors({ dentistSlug: "Select a dentist to continue." });
      return;
    }
    if (step === 3) {
      if (!form.appointmentDate || !form.appointmentTime) {
        setErrors({ schedule: "Choose both a date and time." });
        return;
      }
    }
    if (step === 4) {
      if (!form.patientName || !form.patientEmail || !form.patientPhone) {
        setErrors({ patient: "Complete all required patient fields." });
        return;
      }
      setLoading(true);
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      setLoading(false);
      if (!response.ok) {
        setErrors({ submit: data.error ?? "Unable to book appointment." });
        return;
      }
      setConfirmation({ code: data.confirmationCode, message: data.message });
      setStep(5);
      return;
    }
    if (step === 3) await loadAvailability();
    setStep((current) => (current + 1) as Step);
  }

  if (confirmation) {
    return (
      <Card className="max-w-2xl mx-auto text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-teal-700" aria-hidden="true" />
        <h2 className="mt-4 text-2xl font-semibold text-slate-900">
          Appointment confirmed
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">{confirmation.message}</p>
        <p className="mt-6 rounded-2xl bg-teal-50 px-4 py-3 text-sm font-semibold text-teal-900">
          Confirmation code: {confirmation.code}
        </p>
      </Card>
    );
  }

  return (
    <Card className="max-w-3xl mx-auto">
      <div className="mb-8 flex flex-wrap gap-2">
        {["Service", "Dentist", "Schedule", "Details", "Confirm"].map(
          (label, index) => (
            <span
              key={label}
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                step === index + 1
                  ? "bg-teal-700 text-white"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              {index + 1}. {label}
            </span>
          ),
        )}
      </div>

      {step === 1 ? (
        <div className="grid gap-3">
          {services.map((service) => (
            <label
              key={service.slug}
              className={`cursor-pointer rounded-2xl border p-4 ${
                form.serviceSlug === service.slug
                  ? "border-teal-700 bg-teal-50"
                  : "border-slate-200"
              }`}
            >
              <input
                type="radio"
                name="service"
                value={service.slug}
                checked={form.serviceSlug === service.slug}
                onChange={() =>
                  setForm((current) => ({ ...current, serviceSlug: service.slug }))
                }
                className="sr-only"
              />
              <p className="font-semibold text-slate-900">{service.title}</p>
              <p className="mt-1 text-sm text-slate-600">{service.description}</p>
            </label>
          ))}
          {errors.serviceSlug ? (
            <p className="text-sm text-red-600">{errors.serviceSlug}</p>
          ) : null}
        </div>
      ) : null}

      {step === 2 ? (
        <div className="grid gap-3">
          {dentists.map((dentist) => (
            <label
              key={dentist.slug}
              className={`cursor-pointer rounded-2xl border p-4 ${
                form.dentistSlug === dentist.slug
                  ? "border-teal-700 bg-teal-50"
                  : "border-slate-200"
              }`}
            >
              <input
                type="radio"
                name="dentist"
                value={dentist.slug}
                checked={form.dentistSlug === dentist.slug}
                onChange={() =>
                  setForm((current) => ({ ...current, dentistSlug: dentist.slug }))
                }
                className="sr-only"
              />
              <p className="font-semibold text-slate-900">{dentist.name}</p>
              <p className="text-sm text-teal-700">{dentist.title}</p>
            </label>
          ))}
          {errors.dentistSlug ? (
            <p className="text-sm text-red-600">{errors.dentistSlug}</p>
          ) : null}
        </div>
      ) : null}

      {step === 3 ? (
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="appointmentDate" className="mb-2 block text-sm font-medium">
              Preferred date
            </label>
            <Input
              id="appointmentDate"
              type="date"
              min={minDate}
              value={form.appointmentDate}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  appointmentDate: event.target.value,
                  appointmentTime: "",
                }))
              }
              onBlur={loadAvailability}
            />
          </div>
          <div>
            <p className="mb-2 block text-sm font-medium">Available times</p>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((slot) => {
                const disabled = bookedSlots.includes(slot);
                return (
                  <button
                    key={slot}
                    type="button"
                    disabled={disabled}
                    onClick={() =>
                      setForm((current) => ({ ...current, appointmentTime: slot }))
                    }
                    className={`rounded-xl px-3 py-2 text-sm ${
                      form.appointmentTime === slot
                        ? "bg-teal-700 text-white"
                        : disabled
                          ? "cursor-not-allowed bg-slate-100 text-slate-400"
                          : "border border-slate-200 text-slate-700"
                    }`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>
          {errors.schedule ? (
            <p className="text-sm text-red-600 md:col-span-2">{errors.schedule}</p>
          ) : null}
        </div>
      ) : null}

      {step === 4 ? (
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="patientName" className="mb-2 block text-sm font-medium">
              Full name
            </label>
            <Input
              id="patientName"
              value={form.patientName}
              onChange={(event) =>
                setForm((current) => ({ ...current, patientName: event.target.value }))
              }
              required
            />
          </div>
          <div>
            <label htmlFor="patientPhone" className="mb-2 block text-sm font-medium">
              Mobile number
            </label>
            <Input
              id="patientPhone"
              value={form.patientPhone}
              onChange={(event) =>
                setForm((current) => ({ ...current, patientPhone: event.target.value }))
              }
              required
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="patientEmail" className="mb-2 block text-sm font-medium">
              Email address
            </label>
            <Input
              id="patientEmail"
              type="email"
              value={form.patientEmail}
              onChange={(event) =>
                setForm((current) => ({ ...current, patientEmail: event.target.value }))
              }
              required
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="notes" className="mb-2 block text-sm font-medium">
              Notes (optional)
            </label>
            <Textarea
              id="notes"
              value={form.notes}
              onChange={(event) =>
                setForm((current) => ({ ...current, notes: event.target.value }))
              }
            />
          </div>
          {errors.patient ? (
            <p className="text-sm text-red-600 md:col-span-2">{errors.patient}</p>
          ) : null}
          {errors.submit ? (
            <p className="text-sm text-red-600 md:col-span-2">{errors.submit}</p>
          ) : null}
          <div className="md:col-span-2 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
            <p>
              <strong>Service:</strong> {selectedService?.title}
            </p>
            <p>
              <strong>Dentist:</strong> {selectedDentist?.name}
            </p>
            <p>
              <strong>Schedule:</strong> {form.appointmentDate} at {form.appointmentTime}
            </p>
          </div>
        </div>
      ) : null}

      <div className="mt-8 flex justify-between">
        <Button
          type="button"
          variant="outline"
          disabled={step === 1 || loading}
          onClick={() => setStep((current) => (current - 1) as Step)}
        >
          Back
        </Button>
        <Button type="button" onClick={handleNext} disabled={loading}>
          {loading ? "Booking..." : step === 4 ? "Confirm Booking" : "Continue"}
        </Button>
      </div>
    </Card>
  );
}
