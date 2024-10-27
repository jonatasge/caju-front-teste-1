import * as S from "./styles";

type Props = React.ComponentProps<typeof S.ErrorMessage>;

const ErrorMessage = (props: Props) => {
  return <S.ErrorMessage {...props} />;
};

export default ErrorMessage;
