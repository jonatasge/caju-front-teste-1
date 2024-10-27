import * as S from "./styles";

type Props = React.ComponentProps<typeof S.Column>;

const Column = (props: Props) => {
  return <S.Column {...props} />;
};
export default Column;
