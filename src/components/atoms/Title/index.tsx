import * as S from "./styles";

type Props = React.ComponentProps<typeof S.Title>;

const Title = ({ size = "default", ...props }: Props) => {
  return <S.Title {...props} size={size} />;
};

export default Title;
