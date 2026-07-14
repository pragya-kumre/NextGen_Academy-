// Lead capture service. Modular so we can swap in n8n / CRM later
// without touching UI components.

export interface LeadPayload {
  name: string;
  phone: string;
  email: string;
  course: string;
  source: "website" | "chat" | "contact";
  timestamp: string;
  message?: string;
}

export interface LeadDraft {
  name?: string;
  phone?: string;
  email?: string;
  course?: string;
  message?: string;
}

export function isQualifiedLead(d: LeadDraft): d is Required<Pick<LeadDraft, "name" | "course">> & LeadDraft {
  const hasName = !!d.name && d.name.trim().length > 1;
  const hasContact = !!(d.phone && d.phone.trim().length >= 7) || !!(d.email && /.+@.+\..+/.test(d.email));
  const hasCourse = !!d.course && d.course.trim().length > 1;
  return hasName && hasContact && hasCourse;
}

export async function submitLead(
  draft: LeadDraft,
  source: LeadPayload["source"],
): Promise<{ ok: boolean; error?: string }> {
  const payload: LeadPayload = {
    name: draft.name?.trim() ?? "",
    phone: draft.phone?.trim() ?? "",
    email: draft.email?.trim() ?? "",
    course: draft.course?.trim() ?? "",
    source,
    timestamp: new Date().toISOString(),
    message: draft.message?.trim() || undefined,
  };

  const url = import.meta.env.VITE_N8N_WEBHOOK_URL as string | undefined;

  if (!url) {
    // Demo mode — no webhook configured yet. Log for developer visibility.
    // eslint-disable-next-line no-console
    console.info("[leads] webhook not configured, demo payload:", payload);
    return { ok: true };
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) return { ok: false, error: `Webhook returned ${res.status}` };
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "Network error" };
  }
}