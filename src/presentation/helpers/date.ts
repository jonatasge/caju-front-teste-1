export function formatDate(
  str: string,
  ...args: Parameters<typeof Intl.DateTimeFormat>[]
) {
  const date = new Date(str);
  const formatter = new Intl.DateTimeFormat(...args);
  return formatter.format(date);
}
