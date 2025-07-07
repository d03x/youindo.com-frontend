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
    <div className="mt-2 space-y-7 flex-1">
      <div className="flex bg-white  fixed top-[50px] w-full pb-3 py-1 z-1 overflow-x-auto min-w-[calch(100vh_-_150px)]  items-center gap-x-3">
        {category.map((item) => {
          return (
            <Link
              className="py-1.5 px-5 rounded-lg bg-slate-50 block"
              to={`?cat=${item}`}
            >
              {item}
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-3 mt-[50px] gap-6 mr-6">
        {[1, 2, 3, 4, 5, 6, 2, 3, 4, 5, 5, 6, 7, 7, 8, 8].map(() => {
          return (
            <div className="col-span-1 cursor-pointer space-y-3">
              <div className="max-h-[200px]  w-full hover:rounded-none transition-all rounded-lg flex items-center overflow-hidden">
                <img
                  src="https://www.policetube.com/_next/image?url=https%3A%2F%2Fapi.policetube.co%2Fthumbnail%2Ft1video-6921750489948783.png&w=640&q=45"
                  alt=""
                />
              </div>

              <div className="flex">
                <div className="flex-col mr-3">
                  <p className="font-semibold text-[15px] line-clamp-2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Illum, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quas recusandae autem officiis voluptatum rerum impedit expedita dicta, sit odit facilis, nesciunt quaerat qui maxime vero voluptate debitis cupiditate exercitationem.
                  </p>
                  <div className="mt-2">
                    <Persona
                      avatar={{
                        color: "colorful",
                        image: {
                          src: "https://res-1.cdn.office.net/files/fabric-cdn-prod_20230815.002/office-ui-fabric-react-assets/persona-male.png",
                        },
                      }}
                      size="medium"
                      secondaryText="27Jt x Ditonton - 1 Tahun lalu"
                      name="Arul Eka Putra"
                      presence={{ status: "available" }}
                    />
                  </div>
                </div>
                <div className="ml-auto">
                  <Button
                    size="small"
                    appearance="transparent"
                    icon={<MoreHorizontal24Filled />}
                  />
                  
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
