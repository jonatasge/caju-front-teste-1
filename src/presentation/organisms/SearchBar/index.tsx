import { HiRefresh } from "react-icons/hi";

import Button from "@/presentation/atoms/Button";
import IconButton from "@/presentation/atoms/IconButton";
import TextField from "@/presentation/molecules/TextField";
import * as S from "./styles";
import { maskCpf } from "@/validation/masks/cpf";
import { validateCpf } from "@/validation/cpf";

type Props = React.ComponentProps<typeof S.Container> & {
  onAdd(): void;
  onRefresh(): void;
  onSearch(): void;
};

const SearchBar = ({ onAdd, onRefresh, onSearch, ...props }: Props) => {
  function onChange(event: React.KeyboardEvent) {
    const input = event.target as HTMLInputElement
    maskCpf(input);
    const cpfOnlyNumbers = input.value.replace(/\D/g, '');
    const isEmpty = !cpfOnlyNumbers;
    const isValid = isEmpty || validateCpf(input.value);
    if (isValid) onSearch?.(cpfOnlyNumbers);
  }

  function onFocus(event: React.FocusEvent) {
    const input = event.target as HTMLInputElement
    maskCpf(input);
  }

  function onBlur(event: React.FocusEvent) {
    const input = event.target as HTMLInputElement
    const isEmpty = !input.value.replace(/\D/g, '');
    if (isEmpty) input.value = '';
  }

  return (
    <S.Container {...props}>
      <TextField
        placeholder="Digite um CPF válido"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />

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
