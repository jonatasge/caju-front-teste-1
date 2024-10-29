export function getFormValues(form: HTMLFormElement) {
  if (!form) return {};
  const entries = new FormData(form).entries();
  return Object.fromEntries(entries) as { [k: string]: string };
}
