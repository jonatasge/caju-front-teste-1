import { HiRefresh } from "react-icons/hi";

import Button from "@/presentation/atoms/Button";
import IconButton from "@/presentation/atoms/IconButton";
import TextField from "@/presentation/molecules/TextField";
import * as S from "./styles";

type Props = React.ComponentProps<typeof S.Container> & {
  onAdd(): void;
  onRefresh(): void;
  onSearch(): void;
};

const SearchBar = ({ onAdd, onRefresh, onSearch, ...props }: Props) => {
  function onChange(event: React.KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    onSearch?.(input.value);
  }

  return (
    <S.Container {...props}>
      <TextField placeholder="Digite um CPF válido" onChange={onChange} />

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
