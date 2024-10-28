import * as S from "./styles";

type Props = React.ComponentProps<typeof S.Container>;

const Container = (props: Props) => {
  return <S.Container {...props} />;
};

export default Container;
