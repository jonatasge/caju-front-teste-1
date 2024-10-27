import * as S from "./styles";

type Props = React.HTMLAttributes<HTMLButtonElement>;

const IconButton = (props: Props) => {
  return <S.IconButton {...props} />;
};

export default IconButton;