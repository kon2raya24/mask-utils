/**
 * maskString
 * @param str
 * @param visibleStart = 2
 * @param visibleEnd = 2
 * @param maskChar = "*"
 */
export function maskString(str: string, visibleStart = 2, visibleEnd = 2, maskChar = "*"): string {
  if (str.length <= visibleStart + visibleEnd) return str;
  return str.slice(0, visibleStart) + maskChar.repeat(str.length - visibleStart - visibleEnd) + str.slice(-visibleEnd);
}
