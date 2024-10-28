import Button from "@/presentation/atoms/Button";
import Text from "@/presentation/atoms/Text";
import * as S from "./styles";

type Props = React.ComponentProps<typeof S.Dialog> & {
  message?: string;
  onDismiss(): void;
  onContinue(): void;
};

const Dialog = ({
  children,
  onDismiss,
  onContinue,
  show = false,
  ...props
}: Props) => {
  return (
    <S.Dialog {...props} show={show}>
      <S.Card show={show}>
        <S.Header>
          <Text as="h1">{props.title}</Text>
        </S.Header>

        <S.Content>{children}</S.Content>

        <S.Actions>
          <Button size="small" variant="secondary" onClick={onDismiss}>
            Voltar
          </Button>
          <Button size="small" variant="primary" onClick={onContinue}>
            Continuar
          </Button>
        </S.Actions>
      </S.Card>
    </S.Dialog>
  );
};

export default Dialog;
