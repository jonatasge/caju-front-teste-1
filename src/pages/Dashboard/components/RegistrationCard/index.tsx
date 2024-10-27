import {
  HiOutlineCalendar,
  HiOutlineMail,
  HiOutlineTrash,
  HiOutlineUser,
} from "react-icons/hi";

import Button from "@/components/atoms/Button";
import * as S from "./styles";

type Props = {
  data: any;
};

const RegistrationCard = (props: Props) => {
  return (
    <S.Card>
      <S.IconAndText>
        <HiOutlineUser />
        <h3>{props.data.employeeName}</h3>
      </S.IconAndText>

      <S.IconAndText>
        <HiOutlineMail />
        <p>{props.data.email}</p>
      </S.IconAndText>

      <S.IconAndText>
        <HiOutlineCalendar />
        <span>{props.data.admissionDate}</span>
      </S.IconAndText>
      
      <S.Actions>
        <Button size="small" bgColor="rgb(255, 145, 154)">
          Reprovar
        </Button>
        <Button size="small" bgColor="rgb(155, 229, 155)">
          Aprovar
        </Button>
        <Button size="small" bgColor="#ff8858">
          Revisar novamente
        </Button>

        <HiOutlineTrash />
      </S.Actions>
    </S.Card>
  );
};

export default RegistrationCard;
