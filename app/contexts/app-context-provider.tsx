import { createContext } from "react";

const AppContext = createContext<any>(null)
export default function AppContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  );
}