import { Link } from "react-router";
import type { Route } from "./+types/home";
import {
  Avatar,
  Button,
  Card,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Persona,
  Text,
} from "@fluentui/react-components";
import {
  Check20Regular,
  CheckmarkCircle12Regular,
  CheckmarkCircle16Color,
  MoreCircle24Regular,
  MoreHorizontal24Filled,
} from "@fluentui/react-icons";
import CategoryList from "~/features/category/components/category-list";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MY APP" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
const category = [
  "Semua",
  "Trending",
  "Musik",
  "Game",
  "Berita",
  "Olahraga",
  "Film",
  "Teknologi",
];
export default function Home() {
  return (
    <div className="py-3">
      <CategoryList/>
    </div>
  );
}
