import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { registrations } from "@/data/Registrations";
import { Registration, RegistrationStatus } from "@/domain/Registration";
import Text from "@/presentation/atoms/Text";
import useDebounce from "@/presentation/hooks/useDebounce";
import Toast from "@/presentation/molecules/Toast";
import Dialog from "@/presentation/organisms/Dialog";
import routes from "@/presentation/routes";
import { useStore } from "@/presentation/store";
import DashboardTemplate from "@/presentation/templates/Dashboard";
import { Action } from "@/presentation/templates/Dashboard/types";

const COLUMNS = [
  {
    actions: [Action.APPROVE, Action.REPROVE, Action.REMOVE],
    status: RegistrationStatus.REVIEW,
    title: "Pronto para revisar",
  },
  {
    actions: [Action.REVIEW_AGAIN, Action.REMOVE],
    status: RegistrationStatus.APPROVED,
    title: "Aprovado",
  },
  {
    actions: [Action.REVIEW_AGAIN, Action.REMOVE],
    status: RegistrationStatus.REPROVED,
    title: "Reprovado",
  },
];

const DashboardPage = () => {
  const { store, setStore } = useStore();
  const navigate = useNavigate();
  const [dialog, setDialog] = useState<React.ComponentProps<typeof Dialog>>({
    show: false,
  });
  const [data, setData] = useState<Registration[]>([]);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  function setToast(toast: React.ComponentProps<typeof Toast>) {
    setStore({ ...store, toast });
  }

  async function onLoadData() {
    setStore({ ...store, isLoading: true });
    try {
      const data = await registrations.get();
      setData(data);
    } catch (error) {
      setToast({
        children: "Falha ao carregar os dados: " + error.message,
        delay: 500,
        show: true,
        variant: "error",
      });
    }
    setStore({ ...store, isLoading: false });
  }

  useEffect(() => {
    onLoadData();
  }, []);

  async function onSearch(value: string) {
    if (!value) return onLoadData();

    setStore({ ...store, isLoading: true });
    try {
      const data = await registrations.find("cpf", value);
      setData(data);
    } catch (error) {
      setToast({
        children: "Falha na busca: " + error.message,
        delay: 500,
        show: true,
        variant: "error",
      });
    }
    setStore({ ...store, isLoading: false });
  }

  useEffect(() => {
    onSearch(debouncedSearch);
  }, [debouncedSearch]);

  async function onStatusChange({
    newStatus,
    ...registration
  }: Parameters<
    React.ComponentProps<typeof DashboardTemplate>["onStatusChange"]
  >[0]) {
    setDialog({
      show: true,
      onContinue: async () => {
        setDialog({ show: false });
        try {
          await registrations.put(registration.id, {
            ...registration,
            status: newStatus,
          });
          onSearch(debouncedSearch);
          setToast({
            children: "Sucesso!",
            delay: 500,
            show: true,
            variant: "success",
          });
        } catch (error) {
          setToast({
            children: "Falha ao atualizar o status: " + error.message,
            delay: 500,
            show: true,
            variant: "error",
          });
        }
      },
      onDismiss: () => setDialog({ show: false }),
    });
  }

  function goToNewAdmissionPage() {
    navigate(routes.newAdmission.path);
  }

  return (
    <>
      <Dialog title="Confirmar ação" {...dialog}>
        <Text>Tem certeza que deseja fazer isso?</Text>
      </Dialog>

      <DashboardTemplate
        columns={COLUMNS}
        data={data}
        onAddButtonClick={goToNewAdmissionPage}
        onRefresh={() => onSearch(debouncedSearch)}
        onSearch={setSearch}
        onStatusChange={onStatusChange}
      />
    </>
  );
};

export default DashboardPage;
