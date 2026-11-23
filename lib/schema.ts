import { z } from "zod";
const today = () => new Date().toISOString().slice(0, 10);
export const appointmentSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name"),
  phone: z.string().trim().regex(/^(\+91[\s-]?)?[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z.string().trim().email("Enter a valid email").optional().or(z.literal("")),
  date: z.string().optional().refine(v => !v || v >= today(), "Date cannot be in the past"),
  time: z.string().optional(),
  service: z.string().optional(),
  message: z.string().max(500).optional(),
});
export type AppointmentInput = z.infer<typeof appointmentSchema>;
