import { Outlet } from "react-router";
import AppContextProvider, {
  useAppContext,
} from "~/contexts/app-context-provider";
import styles from "../styles/app-layout.module.scss";
import { Navbar } from "~/features/navbar";
import { Sidebar } from "~/features/sidebar";
import cn from "classnames";
import { useCallback, useState } from "react";
export default function AppLayout({}) {
  const ctx = useAppContext();
  return (
    <AppContextProvider>
      <div className={cn(styles.app_layout, ctx.activeSidebar && styles.layout_active)}>
        <div className={styles.navbar}>
          <Navbar />
        </div>
        <div className={styles.aside}>
          <Sidebar isActiveLayout={ctx.activeSidebar} />
        </div>
        <div className={styles.body}>
          <Outlet />
        </div>
      </div>
    </AppContextProvider>
  );
}
