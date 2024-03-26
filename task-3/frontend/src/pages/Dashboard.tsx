import { Topbar } from "@/components/custom/Topbar";
import { Body } from "@/components/custom/Body";
import { Sidebar } from "@/components/custom/Sidebar";

export const Dashboard = () => {
  return (
    <>
      <div className="md:bg-[#F2F4F7] flex">
        <div className="w-[15%] h-screen hidden md:flex">
          <Sidebar />
        </div>
        <div className="w-ful md:w-[85%]">
          <Topbar />
          <Body />
        </div>
      </div>
    </>
  );
};
