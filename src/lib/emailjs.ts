import emailjs from "@emailjs/browser";

// EMAILJS_CONFIG: replace the env values below (or set them in .env) with your EmailJS IDs.
// Search this file for "EMAILJS_CONFIG" to jump straight to the spots that need your keys.
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

// Per-form template overrides. Set any of these in .env to route each form
// to a different EmailJS template (and optionally a different service).
const TEMPLATES = {
  enquiry: {
    // EMAILJS_CONFIG: Enquiry form (product enquiry / quote dialog) — service + template IDs
    serviceId: (import.meta.env.VITE_EMAILJS_SERVICE_ID_ENQUIRY as string | undefined) ?? SERVICE_ID,
    templateId: (import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ENQUIRY as string | undefined) ?? TEMPLATE_ID,
  },
  contact: {
    // EMAILJS_CONFIG: Contact page form — service + template IDs
    serviceId: (import.meta.env.VITE_EMAILJS_SERVICE_ID_CONTACT as string | undefined) ?? SERVICE_ID,
    templateId: (import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTACT as string | undefined) ?? TEMPLATE_ID,
  },
} as const;

export type EmailForm = keyof typeof TEMPLATES;

export const emailjsConfigured = Boolean(PUBLIC_KEY);

export async function sendEnquiry(params: Record<string, string>, form: EmailForm = "enquiry") {
  const cfg = TEMPLATES[form];
  if (!PUBLIC_KEY || !cfg.serviceId || !cfg.templateId) {
    throw new Error(
      `EmailJS is not configured for "${form}". Set VITE_EMAILJS_PUBLIC_KEY plus VITE_EMAILJS_SERVICE_ID_${form.toUpperCase()} and VITE_EMAILJS_TEMPLATE_ID_${form.toUpperCase()} (or the shared VITE_EMAILJS_SERVICE_ID / VITE_EMAILJS_TEMPLATE_ID).`,
    );
  }
  return emailjs.send(cfg.serviceId, cfg.templateId, params, { publicKey: PUBLIC_KEY });
}
