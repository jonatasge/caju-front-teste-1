import * as S from "./styles";

type Props = React.ComponentProps<typeof S.Button>;

const Button = ({ size = "default", ...props }: Props) => {
  return <S.Button {...props} size={size} />;
};

export default Button;
