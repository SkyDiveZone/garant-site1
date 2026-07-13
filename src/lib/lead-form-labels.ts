const LEAD_FORM_LABELS: Record<string, { title: string; submitLabel: string }> = {
  santehnik: {
    title: "Вызвать сантехника",
    submitLabel: "Вызвать сантехника",
  },
};

export function getLeadFormLabels(
  slug?: string | null,
  categoryLabel?: string
): { title: string; submitLabel: string } {
  if (slug && LEAD_FORM_LABELS[slug]) {
    return LEAD_FORM_LABELS[slug];
  }

  if (categoryLabel) {
    return {
      title: `Вызвать ${categoryLabel.toLowerCase()}`,
      submitLabel: "Вызвать мастера",
    };
  }

  return {
    title: "Вызвать мастера",
    submitLabel: "Вызвать мастера",
  };
}

export function getLeadFormLabelsFromPath(pathname: string): {
  title: string;
  submitLabel: string;
} {
  const slug =
    pathname === "/" ? null : pathname.replace(/^\//, "").split("/").filter(Boolean)[0] ?? null;
  return getLeadFormLabels(slug);
}
