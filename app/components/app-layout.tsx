import { Outlet } from "react-router";
import styles from "./app-layouts.module.scss";
import NavbarApp from "./ui/NavbarApp";
import { Sidebar } from "~/features/sidebar";

export default function AppLayout() {
  return (
    <div className={styles.appLayout}>
      <NavbarApp />
      <div className={styles.main}>
          <Sidebar/>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
