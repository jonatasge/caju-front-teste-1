import {
  HiOutlineCalendar,
  HiOutlineMail,
  HiOutlineUser,
} from "react-icons/hi";

import Text from "@/components/atoms/Text";
import * as S from "./styles";

type Props = React.ComponentProps<typeof S.Actions> & {
  data: {
    admissionDate: string;
    email: string;
    employeeName: string;
  };
};

const RegistrationCard = ({ data, ...props }: Props) => {
  return (
    <S.Card>
      <S.IconAndText>
        <HiOutlineUser />
        <S.Title as="h3">{data.employeeName}</S.Title>
      </S.IconAndText>

      <S.IconAndText>
        <HiOutlineMail />
        <Text>{data.email}</Text>
      </S.IconAndText>

      <S.IconAndText>
        <HiOutlineCalendar />
        <Text>{data.admissionDate}</Text>
      </S.IconAndText>

      <S.Actions {...props} />
    </S.Card>
  );
};

export default RegistrationCard;
