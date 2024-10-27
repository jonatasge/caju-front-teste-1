import * as S from "./styles";

type Props = React.HTMLAttributes<HTMLButtonElement>;

export const IconButton = (props: Props) => {
  return <S.IconButton {...props}>{props.children}</S.IconButton>;
};
