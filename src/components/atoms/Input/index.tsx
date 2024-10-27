import * as S from "./styles";

type Props = React.ComponentProps<typeof S.Input>;

const Input = ({ size = "default", ...props }: Props) => {
  return <S.Input {...props} size={size} />;
};

export default Input;
