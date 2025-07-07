import { createContext, useContext, useState } from "react";

const AppContext = createContext<{
  isCompactSidebar: boolean;
  toggleCompactSidebar: () => void;
}>({
  isCompactSidebar: true,
  toggleCompactSidebar() {},
});
export default function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCompactSidebar, setCompactSidebar] = useState<boolean>(false);

  function toggleCompactSidebar() {
    setCompactSidebar(!isCompactSidebar);
  }

  return (
    <AppContext.Provider value={{ isCompactSidebar, toggleCompactSidebar }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = ()=>{
    return  useContext(AppContext)
};