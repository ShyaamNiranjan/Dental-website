"use client";

import { useCallback, useMemo, useRef, useState } from "react";
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
  const cardRef = useRef<HTMLDivElement>(null);

  const selectedService = services.find((item) => item.slug === form.serviceSlug);
  const selectedDentist = dentists.find((item) => item.slug === form.dentistSlug);

  const minDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date.toISOString().split("T")[0];
  }, []);

  function scrollToCard() {
    cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function advanceStep() {
    setStep((current) => (current + 1) as Step);
    setTimeout(scrollToCard, 80);
  }

  const loadAvailability = useCallback(async (date: string, dentistSlug: string) => {
    if (!date || !dentistSlug) return;
    const params = new URLSearchParams({ date, dentistSlug });
    const response = await fetch(`/api/availability?${params.toString()}`);
    const data = await response.json();
    setBookedSlots(data.bookedSlots ?? []);
  }, []);

  function selectService(slug: string) {
    setForm((current) => ({ ...current, serviceSlug: slug }));
    setErrors({});
    setTimeout(advanceStep, 200);
  }

  function selectDentist(slug: string) {
    setForm((current) => ({ ...current, dentistSlug: slug }));
    setErrors({});
    setTimeout(advanceStep, 200);
  }

  async function handleNext() {
    setErrors({});

    if (step === 1) {
      if (!form.serviceSlug) {
        setErrors({ serviceSlug: "Select a service to continue." });
        return;
      }
      advanceStep();
      return;
    }

    if (step === 2) {
      if (!form.dentistSlug) {
        setErrors({ dentistSlug: "Select a dentist to continue." });
        return;
      }
      advanceStep();
      return;
    }

    if (step === 3) {
      if (!form.appointmentDate || !form.appointmentTime) {
        setErrors({ schedule: "Choose both a date and time slot." });
        return;
      }
      advanceStep();
      return;
    }

    if (step === 4) {
      if (!form.patientName || !form.patientEmail || !form.patientPhone) {
        setErrors({ patient: "Please complete all required fields." });
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
        setErrors({ submit: data.error ?? "Unable to book appointment. Please try again." });
        return;
      }
      setConfirmation({ code: data.confirmationCode, message: data.message });
      setStep(5);
      setTimeout(scrollToCard, 80);
    }
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
    <div ref={cardRef} className="scroll-mt-24">
      <Card className="max-w-3xl mx-auto">
        <div className="mb-8 flex flex-wrap gap-2">
          {["Service", "Dentist", "Schedule", "Details"].map((label, index) => (
            <span
              key={label}
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                step === index + 1
                  ? "bg-slate-950 text-white"
                  : step > index + 1
                    ? "bg-teal-100 text-teal-800"
                    : "bg-slate-100 text-slate-500"
              }`}
            >
              {index + 1}. {label}
            </span>
          ))}
        </div>

        {step === 1 && (
          <div className="grid gap-3">
            <p className="text-sm text-slate-500 mb-1">Select the service you need:</p>
            {services.map((service) => (
              <button
                key={service.slug}
                type="button"
                onClick={() => selectService(service.slug)}
                className={`w-full text-left rounded-2xl border p-4 transition ${
                  form.serviceSlug === service.slug
                    ? "border-teal-600 bg-teal-50 ring-1 ring-teal-600"
                    : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <p className="font-semibold text-slate-900">{service.title}</p>
                <p className="mt-1 text-sm text-slate-600">{service.shortDescription}</p>
                <p className="mt-2 text-xs font-medium text-teal-700">{service.price} · {service.duration} min</p>
              </button>
            ))}
            {errors.serviceSlug && (
              <p className="text-sm text-red-600">{errors.serviceSlug}</p>
            )}
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-3">
            <p className="text-sm text-slate-500 mb-1">Choose your preferred dentist:</p>
            {dentists.map((dentist) => (
              <button
                key={dentist.slug}
                type="button"
                onClick={() => selectDentist(dentist.slug)}
                className={`w-full text-left rounded-2xl border p-4 transition ${
                  form.dentistSlug === dentist.slug
                    ? "border-teal-600 bg-teal-50 ring-1 ring-teal-600"
                    : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <p className="font-semibold text-slate-900">{dentist.name}</p>
                <p className="text-sm text-teal-700">{dentist.title}</p>
                <p className="mt-1 text-xs text-slate-500">{dentist.shortBio}</p>
              </button>
            ))}
            {errors.dentistSlug && (
              <p className="text-sm text-red-600">{errors.dentistSlug}</p>
            )}
          </div>
        )}

        {step === 3 && (
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="appointmentDate" className="mb-2 block text-sm font-medium text-slate-700">
                Preferred date
              </label>
              <Input
                id="appointmentDate"
                type="date"
                min={minDate}
                value={form.appointmentDate}
                onChange={(event) => {
                  const newDate = event.target.value;
                  setForm((current) => ({
                    ...current,
                    appointmentDate: newDate,
                    appointmentTime: "",
                  }));
                  loadAvailability(newDate, form.dentistSlug);
                }}
              />
            </div>
            <div>
              <p className="mb-2 block text-sm font-medium text-slate-700">Available times</p>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((slot) => {
                  const disabled = bookedSlots.includes(slot);
                  return (
                    <button
                      key={slot}
                      type="button"
                      disabled={disabled || !form.appointmentDate}
                      onClick={() =>
                        setForm((current) => ({ ...current, appointmentTime: slot }))
                      }
                      className={`rounded-xl px-2 py-2 text-sm font-medium transition ${
                        form.appointmentTime === slot
                          ? "bg-slate-950 text-white"
                          : disabled || !form.appointmentDate
                            ? "cursor-not-allowed bg-slate-100 text-slate-400"
                            : "border border-slate-200 text-slate-700 hover:border-teal-400"
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
              {!form.appointmentDate && (
                <p className="mt-2 text-xs text-slate-500">Select a date first to see available times.</p>
              )}
            </div>
            {errors.schedule && (
              <p className="text-sm text-red-600 md:col-span-2">{errors.schedule}</p>
            )}
          </div>
        )}

        {step === 4 && (
          <div className="grid gap-4 md:grid-cols-2">
            <div className="md:col-span-2 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700 space-y-1">
              <p><span className="font-medium">Service:</span> {selectedService?.title}</p>
              <p><span className="font-medium">Dentist:</span> {selectedDentist?.name}</p>
              <p><span className="font-medium">Date &amp; Time:</span> {form.appointmentDate} at {form.appointmentTime}</p>
            </div>
            <div>
              <label htmlFor="patientName" className="mb-2 block text-sm font-medium text-slate-700">
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
              <label htmlFor="patientPhone" className="mb-2 block text-sm font-medium text-slate-700">
                Phone number
              </label>
              <Input
                id="patientPhone"
                type="tel"
                placeholder="(424) 555-0147"
                value={form.patientPhone}
                onChange={(event) =>
                  setForm((current) => ({ ...current, patientPhone: event.target.value }))
                }
                required
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="patientEmail" className="mb-2 block text-sm font-medium text-slate-700">
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
              <label htmlFor="notes" className="mb-2 block text-sm font-medium text-slate-700">
                Notes <span className="text-slate-400 font-normal">(optional)</span>
              </label>
              <Textarea
                id="notes"
                placeholder="Any relevant medical history, allergies, or questions..."
                value={form.notes}
                onChange={(event) =>
                  setForm((current) => ({ ...current, notes: event.target.value }))
                }
              />
            </div>
            {errors.patient && (
              <p className="text-sm text-red-600 md:col-span-2">{errors.patient}</p>
            )}
            {errors.submit && (
              <p className="text-sm text-red-600 md:col-span-2">{errors.submit}</p>
            )}
          </div>
        )}

        <div className="mt-8 flex justify-between">
          <Button
            type="button"
            variant="outline"
            disabled={step === 1 || loading}
            onClick={() => {
              setStep((current) => (current - 1) as Step);
              setTimeout(scrollToCard, 80);
            }}
          >
            Back
          </Button>
          {step > 1 && (
            <Button type="button" onClick={handleNext} disabled={loading}>
              {loading ? "Booking..." : step === 4 ? "Confirm Booking" : "Continue"}
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
