import Header from "@/presentation/molecules/Header";
import Router from "@/Router";
import Loading from "./presentation/molecules/Loading";
import { useStore } from "./presentation/store";

function App() {
  const { store } = useStore();

  return (
    <>
      <Header title="Caju Front Teste" />
      <Router />
      <Loading show={store.isLoading} />
    </>
  );
}

export default App;
