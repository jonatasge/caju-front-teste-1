import { HiRefresh } from "react-icons/hi";
import { useHistory } from "react-router-dom";

import Button from "@/components/atoms/Button";
import { IconButton } from "@/components/atoms/IconButton";
import TextField from "@/components/molecules/TextField";
import routes from "@/router/routes";
import * as S from "./styles";

export const SearchBar = () => {
  const history = useHistory();

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser.path);
  };

  return (
    <S.Container>
      <TextField placeholder="Digite um CPF válido" />
      <S.Actions>
        <IconButton aria-label="refetch">
          <HiRefresh />
        </IconButton>
        <Button onClick={() => goToNewAdmissionPage()}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};
