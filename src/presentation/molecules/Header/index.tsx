import Title from "@/presentation/atoms/Title";
import * as S from "./styles";

type Props = React.ComponentProps<typeof S.Header>;

const Header = (props: Props) => {
  return (
    <S.Header {...props}>
      <Title>{props.title}</Title>
    </S.Header>
  );
};

export default Header;
