import * as S from "./styles";

type Props = React.ComponentProps<typeof S.Title>;

const Title = (props: Props) => {
  return <S.Title {...props} />;
};

export default Title;
