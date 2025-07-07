import {
  Badge,
  MenuItemLink as MenuItemFluent,
  Text,
  type MenuItemProps,
} from "@fluentui/react-components";
import styles from "../styles/nav-link.module.scss";
import { useAppContext } from "~/contexts/app-context-provider";
import classNames from "classnames";
import { Link } from "react-router";
import { AnimatePresence, motion } from "motion/react";
export const MenuItem = ({
  children,
  title,
  href,
  icon: Icon,
  badge,
  ...props
}: {
  href: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  props?: any;
  title: string;
  badge?: any;
} & MenuItemProps) => {
  const { isCompactSidebar } = useAppContext();

  return (
    <>
      <Link
        aria-label={title || "Navigation link"} // Gunakan title jika ada, atau teks default
        aria-current={isCompactSidebar ? "page" : undefined} // Tandai link aktif
        className={classNames(styles.nav_link, isCompactSidebar && styles.active)}
        to={href}
        role="link" // Memperjelas peran sebagai link
        tabIndex={0} // Pastikan bisa difokus dengan keyboard
      >
        <AnimatePresence initial={false}>
          {Icon && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              key="box"
              className={styles.icon}
              aria-hidden="true" // Ikon dekoratif disembunyikan dari screen reader
            >
              {Icon}
            </motion.div>
          )}
        </AnimatePresence>
        {title && <span className={styles.text}>{title}</span>}
        {badge && (
          <div className={styles.badge}>
            <Badge
              color="danger"
              shape="rounded"
              aria-hidden="true" // Badge visual disembunyikan karena sudah ada teks alternatif
            >
              {badge}
            </Badge>
          </div>
        )}
      </Link>
    </>
  );
};
