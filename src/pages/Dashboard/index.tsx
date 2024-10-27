import RegistrationCard from "@/components/molecules/RegistrationCard";
import Columns from "@/components/organisms/Columns";
import { SearchBar } from "./components/SearchBar";
import * as S from "./styles";

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
              <RegistrationCard
                data={{
                  admissionDate: "2022-10-15",
                  email: "johndoe@example.com",
                  employeeName: "John Doe",
                }}
              ></RegistrationCard>
            </Columns.ColumnContent>
          </S.Column>
        ))}
      </Columns.Root>
    </S.Container>
  );
};
export default DashboardPage;
