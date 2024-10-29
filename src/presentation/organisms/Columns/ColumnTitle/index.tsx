import * as S from "./styles";

type Props = React.ComponentProps<typeof S.Title>;

const ColumnTitle = (props: Props) => {
  return <S.Title as="h3" {...props} />;
};
export default ColumnTitle;
