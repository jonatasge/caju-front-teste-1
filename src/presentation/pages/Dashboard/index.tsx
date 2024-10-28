import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { registrations } from "@/data/Registrations";
import { Registration, RegistrationStatus } from "@/domain/Registration";
import useDebounce from "@/presentation/hooks/useDebounce";
import DashboardTemplate from "@/presentation/templates/Dashboard";
import { Action } from "@/presentation/templates/Dashboard/types";
import routes from "@/router/routes";
import { useStore } from "@/presentation/Store";

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
  const [data, setData] = useState<Registration[]>([]);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  async function onLoadData() {
    setStore({ ...store, isLoading: true });
    try {
      const data = await registrations.get();
      setData(data);
    } catch (error) {
      alert(error);
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
      alert(error);
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
    await registrations.put(registration.id, { ...registration, status: newStatus });
    onSearch(debouncedSearch);
  }

  function goToNewAdmissionPage() {
    navigate(routes.newAdmission.path);
  }

  return (
    <DashboardTemplate
      columns={COLUMNS}
      data={data}
      onAddButtonClick={goToNewAdmissionPage}
      onRefresh={() => onSearch(debouncedSearch)}
      onSearch={setSearch}
      onStatusChange={onStatusChange}
    />
  );
};

export default DashboardPage;
