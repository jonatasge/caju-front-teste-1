import * as S from "./styles";

type Props = React.ComponentProps<typeof S.Button>;

const Button = ({ size = "default", variant = "none", ...props }: Props) => {
  return <S.Button {...props} size={size} variant={variant} />;
};

export default Button;
