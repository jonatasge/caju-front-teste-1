import { HiOutlineTrash } from "react-icons/hi";

import IconButton from "@/components/atoms/IconButton";
import RegistrationCard from "@/components/molecules/RegistrationCard";
import Columns from "@/components/organisms/Columns";
import { SearchBar } from "./components/SearchBar";
import * as S from "./styles";
import { Action } from "./types";

const columns = [
  { status: "REVIEW", title: "Pronto para revisar" },
  { status: "APPROVED", title: "Aprovado" },
  { status: "REPROVED", title: "Reprovado" },
];

const DashboardPage = () => {
  return (
    <S.Container>
      <SearchBar />

      <Columns.Root>
        {columns.map((column) => (
          <S.Column key={column.status} $status={column.status}>
            <Columns.ColumnTitle>{column.title}</Columns.ColumnTitle>
            <Columns.ColumnContent>
              <RegistrationCard data={{}}>
                <S.ActionButton size="small" $action={Action.REPROVE}>
                  Reprovar
                </S.ActionButton>

                <S.ActionButton size="small" $action={Action.APPROVE}>
                  Aprovar
                </S.ActionButton>

                <S.ActionButton size="small" $action={Action.REVIEW_AGAIN}>
                  Revisar novamente
                </S.ActionButton>

                <IconButton>
                  <HiOutlineTrash />
                </IconButton>
              </RegistrationCard>
            </Columns.ColumnContent>
          </S.Column>
        ))}
      </Columns.Root>
    </S.Container>
  );
};
export default DashboardPage;
