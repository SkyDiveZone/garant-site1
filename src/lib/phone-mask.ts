function nationalDigits(value: string): string {
  let digits = value.replace(/\D/g, "");
  if (digits.startsWith("8")) digits = `7${digits.slice(1)}`;
  if (digits.startsWith("7")) digits = digits.slice(1);
  return digits.slice(0, 10);
}

function maskNational(national: string): string {
  if (!national) return "";
  const area = national.slice(0, 3);
  const prefix = national.slice(3, 6);
  const line = national.slice(6, 8);
  const tail = national.slice(8, 10);
  let formatted = "+7";
  if (area) formatted += ` (${area}`;
  if (area.length === 3) formatted += ")";
  if (prefix) formatted += ` ${prefix}`;
  if (line) formatted += `-${line}`;
  if (tail) formatted += `-${tail}`;
  return formatted;
}

export function formatRuPhone(input: string, previous = ""): string {
  let national = nationalDigits(input);
  const previousNational = nationalDigits(previous);
  if (input.length < previous.length && national === previousNational && national.length > 0) {
    national = national.slice(0, -1);
  }
  return maskNational(national);
}
