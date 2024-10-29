import { getFormValues } from "@/presentation/helpers/form";

type Validations = {
  [key: string]: (value?: string) => string;
};

type Errors = {
  [key: string]: string;
};

export function validateForm(form: HTMLFormElement, validations: Validations) {
  const values = getFormValues(form);
  const errors: Errors = {};

  Object.entries(validations).forEach(([field, validation]) => {
    const error = validation?.(values[field]);
    if (error) errors[field] = error;
  });

  return { errors, isValid: !Object.keys(errors).length };
}
