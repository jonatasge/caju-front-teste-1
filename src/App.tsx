import Header from "@/presentation/molecules/Header";
import Router from "@/Router";
import Loading from "@/presentation/molecules/Loading";
import { useStore } from "@/presentation/store";
import Toast from "./presentation/molecules/Toast";

function App() {
  const { store, setStore } = useStore();

  return (
    <>
      <Header title="Caju Front Teste" />
      <Router />
      <Toast
        {...store.toast}
        onHide={() =>
          setStore({ ...store, toast: { ...store.toast, show: false } })
        }
      />
      <Loading show={store.isLoading} />
    </>
  );
}

export default App;
