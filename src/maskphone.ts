
// Type exports for consumers
// Add specific types as needed
export function maskPhone(phone: string): string {
  const cleaned = phone.replace(/[^0-9+]/g, "");
  if (cleaned.length < 7) throw new Error("Phone number too short");
  return cleaned.slice(0, 4) + "***" + cleaned.slice(-4);
}
