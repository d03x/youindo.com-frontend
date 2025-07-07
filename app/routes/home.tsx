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
  ArrowRight16Filled,
  Check20Regular,
  CheckmarkCircle12Regular,
  CheckmarkCircle16Color,
  MoreCircle24Regular,
  MoreHorizontal24Filled,
} from "@fluentui/react-icons";
import CategoryList from "~/features/category/components/category-list";
import { VideoItem } from "~/features/video";
import { ArrowRight, ArrowRightLeft, Bell } from "lucide-react";

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
    <div className="py-3 mr-4">
      <CategoryList />

      <div className="grid gap-y-6 gap-x-3 grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {Array.from({ length: 18 }).map(() => (
          <VideoItem />
        ))}
      </div>

      <div className="my-5 space-y-7">
        <h1 className="text-xl items-center flex  font-bold">
          <span>Channel</span>
          <ArrowRight />
        </h1>

        <div className="grid grid-cols-6">
          {Array.from({ length: 6 }).map(() => {
            return (
              <div className="flex items-center   flex-col">
                <div>
                  <img
                    className="w-24 rounded-full"
                    src={
                      "https://yt3.googleusercontent.com/WDlB8LfFbbhkGVBUQEfSRHKz0hI4uMx_NYlqPeMvaM6q6neYJknLAeV-CseLjk8reYIPqCUw6g=s176-c-k-c0x00ffffff-no-rj-mo"
                    }
                  />
                </div>
                <div className="flex mt-3 items-center justify-center flex-col">
                  <p className="text-md font-bold">Ardy Revolution</p>
                  <p className="text-sm">580 Rb Subscriber</p>
                  <div className="mt-4">
                    <Button icon={<Bell/>} appearance="secondary">Subscribe</Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
