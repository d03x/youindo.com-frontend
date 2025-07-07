import {
  FluentProvider,
  ProgressBar,
  teamsLightTheme,
  webLightTheme,
} from "@fluentui/react-components";
import { Suspense } from "react";
import { Outlet } from "react-router";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FluentProvider theme={webLightTheme} applyStylesToPortals>
      <Suspense fallback={<ProgressBar/>}>
        <Outlet />
      </Suspense>
    </FluentProvider>
  );
}
