import * as S from "./styles";

type Props = React.ComponentProps<typeof S.IconButton>;

const IconButton = ({
  size = "default",
  variant = "none",
  ...props
}: Props) => {
  return <S.IconButton {...props} size={size} variant={variant} />;
};

export default IconButton;
