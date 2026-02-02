export function isValidAppointmentDate(date: Date): boolean {
  const day = date.getDay();

  // 0 = Pazar, 6 = Cumartesi
  if (day === 0 || day === 6) return false;

  const specialDays = ["2026-04-21"];
  const formatted = date.toISOString().split("T")[0];

  if (specialDays.includes(formatted)) return false;

  return true;
}
