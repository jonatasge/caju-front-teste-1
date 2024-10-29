import { HiOutlineArrowLeft } from "react-icons/hi";

import TextField from "@/presentation/molecules/TextField";
import { validateCpf } from "@/validation/cpf";
import { validateEmail } from "@/validation/email";
import { validateFullName } from "@/validation/fullName";
import { useFormValidation } from "@/validation/hooks/useFormValidation";
import { maskCpf } from "@/validation/masks/cpf";
import * as S from "./styles";

type Props = React.ComponentProps<typeof S.Container> & {
  onBack(): void;
  onSubmit(Event: React.FormEvent): void;
};

const NewAdmissionTemplate = ({ onBack, onSubmit, ...props }: Props) => {
  const { errors, onChange, validate } = useFormValidation({
    employeeName: (value?: string) =>
      !validateFullName(value) ? "Insira o nome completo" : "",
    email: (value?: string) =>
      !validateEmail(value) ? "Insira um email válido" : "",
    cpf: (value?: string) =>
      !validateCpf(value) ? "Insira um CPF válido" : "",
  });

  function onCpfChange(event: React.KeyboardEvent) {
    maskCpf(event.target as HTMLInputElement);
    onChange(event);
  }

  function handleOnSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (validate(event.target as HTMLFormElement)) onSubmit(event);
  }

  return (
    <S.Container {...props}>
      <S.Card>
        <S.IconButton variant="primary" onClick={onBack} aria-label="back">
          <HiOutlineArrowLeft />
        </S.IconButton>

        <S.Form onSubmit={handleOnSubmit}>
          <TextField
            error={errors.employeeName}
            label="Nome"
            name="employeeName"
            onChange={onChange}
            placeholder="Nome"
          />
          <TextField
            error={errors.email}
            label="Email"
            name="email"
            onChange={onChange}
            placeholder="Email"
            type="email"
          />
          <TextField
            error={errors.cpf}
            label="CPF"
            name="cpf"
            onChange={onCpfChange}
            placeholder="CPF"
          />
          <TextField
            label="Data de admissão"
            name="admissionDate"
            type="date"
          />

          <S.Button variant="primary" type="submit">
            Cadastrar
          </S.Button>
        </S.Form>
      </S.Card>
    </S.Container>
  );
};

export default NewAdmissionTemplate;
