import * as S from "./styles";

type Props = React.ComponentProps<typeof S.Text>;

const Text = (props: Props) => {
  return <S.Text {...props} />;
};

export default Text;
