import { useEffect, useState } from "react";

import Text from "@/presentation/atoms/Text";
import * as S from "./styles";

type Props = React.ComponentProps<typeof S.Toast> & {
  delay?: number;
  duration?: number;
  onHide(): void;
};

const Toast = ({
  children,
  delay = 0,
  duration = 5000,
  onHide,
  show = false,
  variant = "info",
  ...props
}: Props) => {
  const [isShow, setIsShow] = useState(false);
  const [timeoutToShow, setTimeoutToShow] = useState<any>();
  const [timeoutToHide, setTimeoutToHide] = useState<any>();

  useEffect(() => {
    if (show) {
      clearTimeout(timeoutToShow);
      setTimeoutToShow(
        setTimeout(() => {
          setIsShow(true);
          onHide(false);
        }, delay)
      );
    } else {
      clearTimeout(timeoutToHide);
      setTimeoutToHide(
        setTimeout(() => {
          setIsShow(false);
          onHide(false);
        }, duration)
      );
    }
  }, [show]);

  return (
    <S.Toast {...props} show={isShow} variant={variant}>
      <Text>{children}</Text>
    </S.Toast>
  );
};

export default Toast;
