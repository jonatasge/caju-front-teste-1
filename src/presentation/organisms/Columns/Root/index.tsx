import * as S from "./styles";

type Props = React.ComponentProps<typeof S.Container>;

const Root = (props: Props) => {
  return <S.Container {...props} />;
};
export default Root;
