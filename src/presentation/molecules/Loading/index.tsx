import { useEffect, useState } from "react";

import Text from "@/presentation/atoms/Text";
import * as S from "./styles";

type Props = React.ComponentProps<typeof S.Loading>;

const Loading = ({ show = false, ...props }: Props) => {
  const [isShow, setIsShow] = useState(true);
  const [intervalId, setIntervalId] = useState<any>();

  useEffect(() => {
    if (show) setIsShow(true);
    else {
      clearInterval(intervalId);
      setIntervalId(setInterval(() => setIsShow(show), 500));
    }
  }, [show]);

  return (
    <S.Loading {...props} show={isShow}>
      <img src="/caju.gif" alt="loading" />
      <Text>Carregando...</Text>
    </S.Loading>
  );
};

export default Loading;
