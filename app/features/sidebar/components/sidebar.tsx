import {
  Divider,
  MenuList,
  Tooltip,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import layout from "../styles/sidebar.module.scss";
import {
  Bookmark24Regular,
  Clock24Regular,
  Fire24Regular,
  Home24Regular,
  ListBar24Regular,
  Live24Regular,
  Person24Regular,
  PersonAdd20Regular,
  Play24Regular,
  Video24Regular,
} from "@fluentui/react-icons";
import { MenuItem } from "./menu-item";
import { Link } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import classNames from "classnames";
import { memo } from "react";
import SidebarFooter from "./sidebar-footer";
import { useAppContext } from "~/contexts/app-context-provider";

const useStyles = makeStyles({
  footerLink: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground3,
    textDecoration: "none",
    ":hover": {
      color: tokens.colorBrandForegroundLink,
      textDecoration: "underline",
    },
    marginTop: tokens.spacingVerticalXS,
  },
  copyright: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground3,
    marginTop: tokens.spacingVerticalM,
  },
});

const Sidebar = () => {
  const styles = useStyles();
  const {activeSidebar} = useAppContext()
  const mainMenuItems = [
    { href: "/", icon: <Home24Regular />, label: "Beranda" },
    {
      href: "/reels",
      icon: <Play24Regular />,
      label: "Reels",
      subText: "WKWKW",
    },
    { href: "/live", icon: <Live24Regular />, label: "Live" },
    { href: "/trending", icon: <Fire24Regular />, label: "Trending" },
  ];

  const secondaryMenuItems = [
    { href: "/channel", icon: <Person24Regular />, label: "My Channel" },
    { href: "/playlist", icon: <ListBar24Regular />, label: "Playlist" },
    { href: "/videos", icon: <Video24Regular />, label: "Video Saya" },
    { href: "/history", icon: <Clock24Regular />, label: "History" },
    {
      href: "/watch-later",
      icon: <Bookmark24Regular />,
      label: "Tonton Nanti",
    },
    {
      href: "/subscriptions",
      icon: <PersonAdd20Regular />,
      label: "Subscription",
    },
  ];

  return (
    <nav
      className={classNames(
        layout.sidebar,
        activeSidebar && layout.sidebar_active
      )}
      aria-label="Main navigation"
    >
      <div className="mb-4">
        <MenuList>
          {mainMenuItems.map((item) => (
            <MenuItem
              style={{
                flexDirection: "column",
              }}
              key={item.href}
              href={item.href}
              icon={item.icon}
              subText={item.subText}
            >
              <AnimatePresence>
                {!activeSidebar && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    key="box"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </MenuItem>
          ))}
        </MenuList>

        <AnimatePresence initial={false}>
          {!activeSidebar && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              key="box"
            >
              <Divider className="my-2" alignContent="start" />

              <MenuList>
                {secondaryMenuItems.map((item) => (
                  <MenuItem key={item.href} href={item.href} icon={item.icon}>
                    {!activeSidebar && item.label}
                  </MenuItem>
                ))}
              </MenuList>

              <MenuList>
                {secondaryMenuItems.map((item) => (
                  <MenuItem key={item.href} href={item.href} icon={item.icon}>
                    {!activeSidebar && item.label}
                  </MenuItem>
                ))}
              </MenuList>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <SidebarFooter />
    </nav>
  );
};

export default memo(Sidebar);
