import { createContext, useContext, useState } from "react";

const AppContext = createContext<{
  activeSidebar: boolean;
  navToggleHandler: () => void;
}>({
  activeSidebar: true,
  navToggleHandler() {},
});
export default function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSidebar, setActiveSidebar] = useState<boolean>(true);

  function navToggleHandler() {
    setActiveSidebar(!activeSidebar);
  }

  return (
    <AppContext.Provider value={{ activeSidebar, navToggleHandler }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = ()=>{
    return  useContext(AppContext)
};