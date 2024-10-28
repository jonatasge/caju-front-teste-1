import { HiOutlineArrowLeft } from "react-icons/hi";

import TextField from "@/presentation/molecules/TextField";
import * as S from "./styles";

type Props = React.ComponentProps<typeof S.Container> & {
  onBack(): void;
  onSubmit(Event: React.FormEvent): void;
};

const NewAdmissionTemplate = ({ onBack, onSubmit, ...props }: Props) => {
  return (
    <S.Container {...props}>
      <S.Card>
        <S.IconButton variant="primary" onClick={onBack} aria-label="back">
          <HiOutlineArrowLeft />
        </S.IconButton>

        <S.Form onSubmit={onSubmit}>
          <TextField label="Nome" name="name" placeholder="Nome" />
          <TextField
            label="Email"
            name="email"
            placeholder="Email"
            type="email"
          />
          <TextField label="CPF" name="cpf" placeholder="CPF" />
          <TextField
            label="Data de admissão"
            name="dateOfAdmission"
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
