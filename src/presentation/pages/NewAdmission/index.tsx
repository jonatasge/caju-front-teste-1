import { useNavigate } from "react-router-dom";

import { getFormValues } from "@/presentation/helpers/form";
import routes from "@/presentation/routes";
import NewAdmissionTemplate from "@/presentation/templates/NewAdmission";

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
