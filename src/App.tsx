import Header from "@/presentation/molecules/Header";
import Router from "@/router";
import Loading from "./presentation/molecules/Loading";
import { useStore } from "./presentation/Store";

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
