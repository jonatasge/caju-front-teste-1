import { HiRefresh } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import Button from "@/components/atoms/Button";
import TextField from "@/components/molecules/TextField";
import routes from "@/router/routes";
import * as S from "./styles";

export const SearchBar = () => {
  const navigate = useNavigate();

  const goToNewAdmissionPage = () => {
    navigate(routes.newUser.path);
  };

  return (
    <S.Container>
      <TextField placeholder="Digite um CPF válido" />
      <S.Actions>
        <S.IconButton aria-label="refetch">
          <HiRefresh />
        </S.IconButton>

        <Button
          style={{ backgroundColor: "#64a98c", color: "#fff" }}
          onClick={() => goToNewAdmissionPage()}
        >
          Nova Admissão
        </Button>
      </S.Actions>
    </S.Container>
  );
};
