import { createContext, useContext, useState } from "react";

const Store = createContext({
  store: {},
  setStore: () => ({}),
} as any);

export function StoreProvider({ children }: any) {
  const [store, setStore] = useState<any>({});

  return (
    <Store.Provider value={{ store, setStore }}>{children}</Store.Provider>
  );
}

export function useStore() {
  return useContext(Store);
}
