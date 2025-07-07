import {
  Avatar,
  Button,
  Hamburger,
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import AppLogo from "../logo/app-logo";
import SearchBox from "./SearchBox";
import MicButton from "./MicButton";
const makeStyle = makeStyles({
  headerColor: {
    height: "50px",
    position: "sticky",
    top: 0,
    zIndex: 999,
    backgroundColor: tokens.colorNeutralBackground1,
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    height: "100%",
  },
});
export default function NavbarApp() {
  const styless = makeStyle();

  return (
    <nav
      className={styless.headerColor}
      style={{
        color: tokens.colorNeutralBackground1Pressed,
      }}
    >
      <div className={`${styless.wrapper} px-2 pr-6 lg:px-6`}>
        <div className="flex items-center gap-2">
          <Button appearance="transparent" size="large" icon={<Hamburger />} />
          <AppLogo />
        </div>
        <div className={`md:ml-20 hidden lg:block flex-1`}>
          <SearchBox contentAfter={<MicButton />} placeholder="Nama Anda" />
        </div>
        <div className="space-x-2 ml-auto flex items-center gap-3">
          <Button appearance="secondary">Sigin</Button>
          <Avatar />
        </div>
      </div>
    </nav>
  );
}
