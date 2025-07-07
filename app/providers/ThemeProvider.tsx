import {
  FluentProvider,
  ProgressBar,
  teamsLightTheme,
  webLightTheme,
} from "@fluentui/react-components";
import { Suspense } from "react";
import { Outlet } from "react-router";
import AppContextProvider from "~/contexts/app-context-provider";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FluentProvider theme={webLightTheme} applyStylesToPortals>
      <AppContextProvider>
        <Suspense fallback={<ProgressBar/>}>
        <Outlet />
      </Suspense>
      </AppContextProvider>
    </FluentProvider>
  );
}
