import * as S from "./styles";

type Props = React.ComponentProps<typeof S.Card>;

const Card = (props: Props) => {
  return <S.Card {...props} />;
};

export default Card;
