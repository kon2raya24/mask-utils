/**
 * maskEmail
 * @param email
 */
export function maskEmail(email: string): string {
  const [user, domain] = email.split("@");
  if (!user || !domain) throw new Error("Invalid email");
  return user[0] + "***@" + domain;
}
