import { HiRefresh } from "react-icons/hi";

import Button from "@/presentation/atoms/Button";
import IconButton from "@/presentation/atoms/IconButton";
import TextField from "@/presentation/molecules/TextField";
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
        <IconButton
          aria-label="refetch"
          onClick={onRefresh}
          size="small"
          variant="primary"
        >
          <HiRefresh />
        </IconButton>

        <Button variant="primary" onClick={onAdd}>
          Nova Admissão
        </Button>
      </S.Actions>
    </S.Container>
  );
};

export default SearchBar;