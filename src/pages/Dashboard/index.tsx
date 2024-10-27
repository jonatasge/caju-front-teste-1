import Columns from "@/components/organisms/Columns";
import * as S from "./styles";
import { SearchBar } from "./components/SearchBar";

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
              {/* <RegistrationCard /> */}
            </Columns.ColumnContent>
          </S.Column>
        ))}
      </Columns.Root>
    </S.Container>
  );
};
export default DashboardPage;
