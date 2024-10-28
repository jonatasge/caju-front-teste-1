export function getFormValues(form: HTMLFormElement) {
  if (!form) return;
  return Object.fromEntries(new FormData(form).entries());
}
