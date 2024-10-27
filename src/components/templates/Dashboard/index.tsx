import { HiOutlineTrash } from "react-icons/hi";

import IconButton from "@/components/atoms/IconButton";
import RegistrationCard from "@/components/molecules/RegistrationCard";
import Columns from "@/components/organisms/Columns";
import SearchBar from "@/components/organisms/SearchBar";
import * as S from "./styles";
import { Action, Column, Item, Status } from "./types";

type Props = {
  columns: Column[];
  items: Item[];
  onStatusChange(data: { item: Item; newStatus: Status }): void;
  onAddButtonClick(): void;
  onRefresh(): void;
};

const DashboardTemplate = ({
  columns,
  items,
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
              {items
                .filter((item) => item.status === column.status)
                .map((item) => (
                  <RegistrationCard key={item.data.email} data={item.data}>
                    {column.actions.includes(Action.REPROVE) ? (
                      <S.ActionButton
                        size="small"
                        $action={Action.REPROVE}
                        onClick={() =>
                          onStatusChange({ item, newStatus: Status.REPROVED })
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
                          onStatusChange({ item, newStatus: Status.APPROVED })
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
                          onStatusChange({ item, newStatus: Status.REVIEW })
                        }
                      >
                        Revisar novamente
                      </S.ActionButton>
                    ) : null}

                    {column.actions.includes(Action.REMOVE) ? (
                      <IconButton
                        onClick={() =>
                          onStatusChange({ item, newStatus: Status.REMOVED })
                        }
                      >
                        <HiOutlineTrash />
                      </IconButton>
                    ) : null}
                  </RegistrationCard>
                ))}
            </Columns.ColumnContent>
          </S.Column>
        ))}
      </Columns.Root>
    </S.Container>
  );
};

export default DashboardTemplate;
