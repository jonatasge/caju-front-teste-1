import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Registration, RegistrationStatus } from "@/domain/Registration";
import DashboardTemplate from "@/presentation/templates/Dashboard";
import { Action } from "@/presentation/templates/Dashboard/types";
import routes from "@/router/routes";
import { registrations } from "@/data/Registrations";

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
  const [data, setData] = useState<Registration[]>([]);
  const navigate = useNavigate();

  async function loadData() {
    try {
      const data = await registrations.get();
      setData(data);
    } catch (error) {
      alert(error);
    }
  }

  function goToNewAdmissionPage() {
    navigate(routes.newAdmission.path);
  }

  function generic(...e: any) {
    console.log("> Generic function called ", e);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <DashboardTemplate
      columns={COLUMNS}
      data={data}
      onAddButtonClick={goToNewAdmissionPage}
      onRefresh={generic}
      onStatusChange={generic}
    />
  );
};

export default DashboardPage;
