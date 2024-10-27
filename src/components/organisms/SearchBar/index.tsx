import { HiRefresh } from "react-icons/hi";

import TextField from "@/components/molecules/TextField";
import * as S from "./styles";

type Props = React.ComponentProps<typeof S.Container> & {
  onAdd(): void;
  onRefresh(): void;
};

const SearchBar = ({ onAdd, onRefresh, ...props }: Props) => {
  return (
    <S.Container {...props}>
      <TextField placeholder="Digite um CPF válido" />

      <S.Actions>
        <S.RefreshButton aria-label="refetch" onClick={onRefresh}>
          <HiRefresh />
        </S.RefreshButton>

        <S.AddButton onClick={onAdd}>Nova Admissão</S.AddButton>
      </S.Actions>
    </S.Container>
  );
};

export default SearchBar;
