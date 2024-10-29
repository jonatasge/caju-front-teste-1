import { useNavigate } from "react-router-dom";

import { getFormValues } from "@/presentation/helpers/form";
import routes from "@/presentation/routes";
import { useStore } from "@/presentation/store";
import NewAdmissionTemplate from "@/presentation/templates/NewAdmission";
import { registrations } from "@/data/Registrations";
import Toast from "@/presentation/molecules/Toast";
import { formatDate } from "@/presentation/helpers/date";

const NewAdmissionPage = () => {
  const navigate = useNavigate();
  const { store, setStore } = useStore();

  function setToast(toast: React.ComponentProps<typeof Toast>) {
    setStore({ ...store, toast });
  }

  function goToHome() {
    navigate(routes.dashboard.path);
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStore({ ...store, isLoading: true });
    const values = getFormValues(event.target as HTMLFormElement);

    values.cpf = values.cpf.replace(/\D/g, "");
    values.admissionDate = formatDate(values.admissionDate as string, "pt-br");

    try {
      await registrations.post(values);
      setToast({
        children: "Sucesso!",
        delay: 500,
        show: true,
        variant: "success",
      });
      navigate(routes.dashboard.path);
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

  return <NewAdmissionTemplate onBack={goToHome} onSubmit={onSubmit} />;
};

export default NewAdmissionPage;
