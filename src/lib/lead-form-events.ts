export const OPEN_LEAD_FORM_EVENT = "garant:open-lead-form";

/** Scroll to #lead-form if present, otherwise ask Header to open the lead modal. */
export function requestLeadForm(): void {
  if (typeof window === "undefined") return;

  const form = document.getElementById("lead-form");
  if (form) {
    form.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  window.dispatchEvent(new CustomEvent(OPEN_LEAD_FORM_EVENT));
}
