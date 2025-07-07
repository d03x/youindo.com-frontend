import { Outlet } from "react-router";
import AppContextProvider from "~/contexts/app-context-provider";
import styles from "../styles/app-layout.module.scss";
import { Navbar } from "~/features/navbar";
import { Sidebar } from "~/features/sidebar";
import cn from "classnames";
import { useCallback, useState } from "react";
export default function AppLayout({}) {
  const [active, setActive] = useState(false);

    const hamburgerOnTap = useCallback(()=>{
        setActive(!active);
    },[active])

  return (
    <AppContextProvider>
      <div className={cn(styles.app_layout, active && styles.layout_active)}>
        <div className={styles.navbar}>
          <Navbar 
          hamburgerOnTap={hamburgerOnTap}
          />
        </div>
        <div className={styles.aside}>
          <Sidebar isActiveLayout={active} />
        </div>
        <div className={styles.body}>
          <Outlet />
        </div>
      </div>
    </AppContextProvider>
  );
}
