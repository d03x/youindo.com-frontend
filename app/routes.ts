import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("providers/ThemeProvider.tsx", [
    route("login", "routes/login.tsx"),
    layout("features/layouts/components/app-layout.tsx", [
      index("routes/home.tsx"),
      route("game", "routes/game.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
