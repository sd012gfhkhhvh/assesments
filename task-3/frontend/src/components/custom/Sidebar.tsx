import { useState } from "react";
import { Menu } from "./Menu"; //data
import { menuData } from "@/data/menuData";

//asset import
import globIcon from "../../assets/globe.png";
import settings from "../../assets/settings.png";
import logOutIcon from "../../assets/logout.png";
import logoIcon from "../../assets/logo.png";

export const Sidebar = () => {
  const [data] = useState(menuData);

  return (
    <div className="bg-white w-full border-s border-1 border-[#EAECF0] flex flex-col justify-between">
      {/* main panel */}
      <div className="flex flex-col gap-8">
        {/* logo */}
        <div className="p-4">
          <img width={"100px"} height={"24px"} src={logoIcon} alt="logo" />
        </div>

        {/* menu */}
        <div className="flex flex-col gap-4">
          {data.map((item, index) => {
            return (
              <Menu
                key={index}
                section_title={item.section_title}
                section_items={item.section_items}
              />
            );
          })}
        </div>
      </div>

      {/* footer */}
      <div className="py-3 px-5 h-[44px] border-t border-[#EAECF0] flex justify-between items-center">
        <img src={settings} width={"20px"} height={"20px"} alt="settings" />
        <img src={logOutIcon} width={"20px"} height={"20px"} alt="logout" />
        <img src={globIcon} width={"20px"} height={"20px"} alt="glob" />
      </div>
    </div>
  );
};
