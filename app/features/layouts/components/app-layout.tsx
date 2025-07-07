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
  const { activeSidebar } = useAppContext();
  return (
    <div
      className={cn(styles.app_layout, activeSidebar && styles.layout_active)}
    >
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.aside}>
        <Sidebar />
      </div>
      <div className={styles.body}>
        <Outlet />
      </div>
    </div>
  );
}
