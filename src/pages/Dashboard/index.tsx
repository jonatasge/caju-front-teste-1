import { useNavigate } from "react-router-dom";

import DashboardTemplate from "@/components/templates/Dashboard";
import { Action, Status } from "@/components/templates/Dashboard/types";
import routes from "@/router/routes";

const columns = [
  {
    actions: [Action.APPROVE],
    status: Status.REVIEW,
    title: "Pronto para revisar",
  },
  {
    actions: [Action.REVIEW_AGAIN],
    status: Status.APPROVED,
    title: "Aprovado",
  },
  { actions: [Action.REMOVE], status: Status.REPROVED, title: "Reprovado" },
];

const DashboardPage = () => {
  const navigate = useNavigate();

  function goToNewAdmissionPage() {
    navigate(routes.newAdmission.path);
  }

  function generic(...e: any) {
    console.log("> Generic function called ", e);
  }

  return (
    <DashboardTemplate
      columns={columns}
      items={[
        {
          data: {
            admissionDate: "2024-01-01T00:00:00",
            email: "joao@email.com",
            employeeName: "João Bosco",
          },
          status: Status.REVIEW,
        },
        {
          data: {
            admissionDate: "2024-02-01T00:00:00",
            email: "maria@email.com",
            employeeName: "Maria Conceição",
          },
          status: Status.APPROVED,
        },
        {
          data: {
            admissionDate: "2024-03-01T00:00:00",
            email: "pedro@email.com",
            employeeName: "Pedro Silva",
          },
          status: Status.REPROVED,
        },
      ]}
      onAddButtonClick={goToNewAdmissionPage}
      onRefresh={generic}
      onStatusChange={generic}
    />
  );
};

export default DashboardPage;
