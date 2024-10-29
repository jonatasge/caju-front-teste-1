import { useState } from "react";
import { validateForm } from "../form";

type Validations = {
  [key: string]: (value?: string) => string;
};

type Errors = {
  [key: string]: string;
};

export function useFormValidation(validations: Validations) {
  const [errors, setErrors] = useState<Errors>({});

  function onChange(event: React.KeyboardEvent) {
    const input = event.target as HTMLInputElement;

    const validation = validations[input.name];
    if (!validation) return;

    const error = validation(input.value);
    setErrors((errors) => ({ ...errors, [input.name]: error }));
  }

  function validate(form: HTMLFormElement) {
    const { errors, isValid } = validateForm(form, validations);
    setErrors(errors);
    return isValid;
  }

  return { errors, validate, onChange };
}
