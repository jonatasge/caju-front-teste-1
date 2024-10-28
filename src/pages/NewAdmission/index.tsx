import { useNavigate } from "react-router-dom";

import routes from "@/router/routes";
import NewAdmissionTemplate from "@/components/templates/NewAdmission";
import { getFormValues } from "@/helpers/form";

const NewAdmissionPage = () => {
  const navigate = useNavigate();

  function goToHome() {
    navigate(routes.dashboard.path);
  }

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const values = getFormValues(event.target as HTMLFormElement);
    console.log(values);
  }

  return <NewAdmissionTemplate onBack={goToHome} onSubmit={onSubmit} />;
};

export default NewAdmissionPage;
