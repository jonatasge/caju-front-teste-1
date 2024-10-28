import { HiOutlineTrash } from "react-icons/hi";

import { RegistrationStatus } from "@/domain/Registration";
import IconButton from "@/presentation/atoms/IconButton";
import RegistrationCard from "@/presentation/molecules/RegistrationCard";
import Columns from "@/presentation/organisms/Columns";
import SearchBar from "@/presentation/organisms/SearchBar";
import * as S from "./styles";
import { Action, Column, Data } from "./types";

type Props = {
  columns: Column[];
  data: Data[];
  onStatusChange(data: Data & { newStatus: RegistrationStatus }): void;
  onAddButtonClick(): void;
  onRefresh(): void;
};

const DashboardTemplate = ({
  columns,
  data,
  onAddButtonClick,
  onRefresh,
  onStatusChange,
  ...props
}: Props) => {
  return (
    <S.Container {...props}>
      <SearchBar onAdd={onAddButtonClick} onRefresh={onRefresh} />

      <Columns.Root>
        {columns.map((column) => (
          <S.Column key={column.status} $status={column.status}>
            <Columns.ColumnTitle>{column.title}</Columns.ColumnTitle>

            <Columns.ColumnContent>
              {data
                .filter((item) => item.status === column.status)
                .map((item) => {
                  console.log(">", columns, data, item);
                  return (
                    <RegistrationCard key={item.id} data={item}>
                      {column.actions.includes(Action.REPROVE) ? (
                        <S.ActionButton
                          size="small"
                          $action={Action.REPROVE}
                          onClick={() =>
                            onStatusChange({
                              item,
                              newStatus: RegistrationStatus.REPROVED,
                            })
                          }
                        >
                          Reprovar
                        </S.ActionButton>
                      ) : null}

                      {column.actions.includes(Action.APPROVE) ? (
                        <S.ActionButton
                          size="small"
                          $action={Action.APPROVE}
                          onClick={() =>
                            onStatusChange({
                              item,
                              newStatus: RegistrationStatus.APPROVED,
                            })
                          }
                        >
                          Aprovar
                        </S.ActionButton>
                      ) : null}

                      {column.actions.includes(Action.REVIEW_AGAIN) ? (
                        <S.ActionButton
                          size="small"
                          $action={Action.REVIEW_AGAIN}
                          onClick={() =>
                            onStatusChange({
                              item,
                              newStatus: RegistrationStatus.REVIEW,
                            })
                          }
                        >
                          Revisar novamente
                        </S.ActionButton>
                      ) : null}

                      {column.actions.includes(Action.REMOVE) ? (
                        <IconButton
                          size="small"
                          onClick={() =>
                            onStatusChange({
                              item,
                              newStatus: RegistrationStatus.REMOVED,
                            })
                          }
                        >
                          <HiOutlineTrash />
                        </IconButton>
                      ) : null}
                    </RegistrationCard>
                  );
                })}
            </Columns.ColumnContent>
          </S.Column>
        ))}
      </Columns.Root>
    </S.Container>
  );
};

export default DashboardTemplate;
