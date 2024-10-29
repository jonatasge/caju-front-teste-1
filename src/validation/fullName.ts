export function validateFullName(value?: string) {
  if (value === undefined) return false;
  const regex = /^(?!\d)(?=.*[a-zA-Z].*[a-zA-Z])([a-zA-Zà-úÀ-Ú\s'-]+)$/;
  const hasSpace = value.includes(" ");
  return regex.test(value) && hasSpace;
}
