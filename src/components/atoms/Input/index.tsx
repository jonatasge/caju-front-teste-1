import * as S from "./styles";

type Props = React.ComponentProps<typeof S.Input>;

const Input = (props: Props) => {
  return <S.Input {...props} />;
};

export default Input;
