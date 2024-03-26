import React, { useState } from "react";
import { Menu } from "./Menu";//data
import { menuData } from "@/data/menuData";

export const Sidebar = () => {
  const [data, setData] = useState(menuData);

  return (
    <div className="bg-white w-full px-4 border-s border-1 border-[#EAECF0] flex flex-col justify-between">
      {/* main panel */}
      <div className="flex flex-col gap-8">
        {/* logo */}
        <div className="py-4">
          <img src="../../assets/logo.png" alt="logo" />
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
      <div>
        <p>items</p>
      </div>
    </div>
  );
};
