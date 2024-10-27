import Title from "@/components/atoms/Title";
import * as S from "./styles";

type Props = React.ComponentProps<typeof S.Header>;

const Header = ({ size = "default", ...props }: Props) => {
  return (
    <S.Header {...props} size={size}>
      <Title>{props.title}</Title>
    </S.Header>
  );
};

export default Header;
