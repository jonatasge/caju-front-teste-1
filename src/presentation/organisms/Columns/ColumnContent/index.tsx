import * as S from "./styles";

type Props = React.ComponentProps<typeof S.Content>;

const ColumnContent = (props: Props) => {
  return <S.Content {...props} />;
};
export default ColumnContent;
