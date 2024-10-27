import * as S from "./styles";

type Props = React.ComponentProps<typeof S.ErrorMessage>;

const ErrorMessage = ({ size = "default", ...props }: Props) => {
  return <S.ErrorMessage {...props} size={size} />;
};

export default ErrorMessage;
