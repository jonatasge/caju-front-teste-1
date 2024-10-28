import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { RegistrationStatus } from "@/domain/Registration";
import DashboardTemplate from "@/presentation/templates/Dashboard";
import { Action } from "@/presentation/templates/Dashboard/types";
import routes from "@/router/routes";

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
  const [items, setItems] = useState([
    {
      data: {
        admissionDate: "2024-01-01T00:00:00",
        email: "joao@email.com",
        employeeName: "João Bosco",
      },
      status: RegistrationStatus.REVIEW,
    },
    {
      data: {
        admissionDate: "2024-02-01T00:00:00",
        email: "maria@email.com",
        employeeName: "Maria Conceição",
      },
      status: RegistrationStatus.APPROVED,
    },
    {
      data: {
        admissionDate: "2024-03-01T00:00:00",
        email: "pedro@email.com",
        employeeName: "Pedro Silva",
      },
      status: RegistrationStatus.REPROVED,
    },
  ]);
  const navigate = useNavigate();

  function goToNewAdmissionPage() {
    navigate(routes.newAdmission.path);
  }

  function generic(...e: any) {
    console.log("> Generic function called ", e);
  }

  return (
    <DashboardTemplate
      columns={COLUMNS}
      items={items}
      onAddButtonClick={goToNewAdmissionPage}
      onRefresh={generic}
      onStatusChange={generic}
    />
  );
};

export default DashboardPage;
