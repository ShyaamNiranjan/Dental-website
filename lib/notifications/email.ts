import { siteConfig } from "@/lib/constants/site";

type ConfirmationPayload = {
  patientName: string;
  patientEmail: string;
  confirmationCode: string;
  serviceTitle: string;
  dentistName: string;
  appointmentDate: string;
  appointmentTime: string;
};

export async function sendAppointmentConfirmation(
  payload: ConfirmationPayload,
) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { sent: false, reason: "Email provider not configured." };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `${siteConfig.name} <no-reply@clearsmile.demo>`,
      to: [payload.patientEmail],
      subject: `Appointment confirmed — ${payload.confirmationCode}`,
      html: `
        <h2>Your appointment is confirmed</h2>
        <p>Hi ${payload.patientName},</p>
        <p>Thank you for booking with ${siteConfig.name}.</p>
        <ul>
          <li><strong>Service:</strong> ${payload.serviceTitle}</li>
          <li><strong>Dentist:</strong> ${payload.dentistName}</li>
          <li><strong>Date:</strong> ${payload.appointmentDate}</li>
          <li><strong>Time:</strong> ${payload.appointmentTime}</li>
          <li><strong>Confirmation code:</strong> ${payload.confirmationCode}</li>
        </ul>
        <p>If you need to reschedule, call us at ${siteConfig.phone}.</p>
      `,
    }),
  });

  return { sent: response.ok, reason: response.ok ? undefined : "Send failed" };
}
