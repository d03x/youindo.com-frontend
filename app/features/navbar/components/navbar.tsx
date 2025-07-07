import { Avatar, Button, Divider, Hamburger } from "@fluentui/react-components";
import styles from "../styles/navbar.module.scss";
import SearchBox from "~/components/ui/SearchBox";
import AppLogo from "~/components/logo/app-logo";
import {
  AddCircle12Regular,
  AddCircle28Regular,
  Alert24Color,
  Alert28Regular,
  ArrowUpload20Filled,
  WeatherMoon28Regular,
} from "@fluentui/react-icons";
import { BellPlus, UploadCloud } from "lucide-react";
export const Navbar = ({ hamburgerOnTap }: { hamburgerOnTap: () => void }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__left}>
        <Button icon={<Hamburger />} onClick={hamburgerOnTap} appearance="transparent" />
        <AppLogo />
      </div>
      <div className={styles.navbar__center}>
        <SearchBox placeholder="Cari apa?" />
        <div className={styles.menu_list}>
          <Button
            size="medium"
            appearance="subtle"
            icon={<AddCircle28Regular />}
          />
          <Button size="medium" appearance="subtle" icon={<Alert28Regular />} />
          <Button
            size="medium"
            appearance="subtle"
            icon={<WeatherMoon28Regular />}
          />
        </div>
      </div>
      <div className={styles.divider}>
        <Divider vertical />
      </div>
      <div className={styles.navbar__right}>
        <Avatar name="Apriadi" />
      </div>
    </nav>
  );
};
