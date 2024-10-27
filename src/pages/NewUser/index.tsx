import { HiOutlineArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import Button from "@/components/atoms/Button";
import IconButton from "@/components/atoms/IconButton";
import TextField from "@/components/molecules/TextField";
import routes from "@/router/routes";
import * as S from "./styles";

const NewUserPage = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate(routes.dashboard.path);
  };

  return (
    <S.Container>
      <S.Card>
        <IconButton onClick={() => goToHome()} aria-label="back">
          <HiOutlineArrowLeft size={24} />
        </IconButton>

        <TextField placeholder="Nome" label="Nome" />
        <TextField placeholder="Email" label="Email" type="email" />
        <TextField placeholder="CPF" label="CPF" />
        <TextField label="Data de admissão" type="date" />

        <Button onClick={() => {}}>Cadastrar</Button>
      </S.Card>
    </S.Container>
  );
};

export default NewUserPage;
