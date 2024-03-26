import { Button } from "../ui/button";

//asset import
import boltIcon from '../../assets/bolt.png'

export const Banner = () => {
  return (
    <div className="w-full flex flex-col md:flex-row md:justify-between p-8 md:px-10 gap-1 justify-center items-center h-[196px] md:h-[128px] bg-[#282828] border-1 rounded-2xl my-4">
      <div className="flex flex-col gap-2 justify-center md:items-start items-center">
        <p className="text-white font-semibold text-[26px]">
          Unlock premium stats
        </p>
        <p className="text-white font-[400] text-sm text-center w-fit px-4 md:px-0">
          Get up to 10TB of storage for a limited time
        </p>
      </div>

      <Button
        variant={"secondary"}
        size={"lg"}
        className="rounded-3xl px-5 text-md text-[#282828] font-bold"
      >
        <img src={boltIcon} alt="bolt" width={"18px"} height={"18px"} className="me-1.5"/>
        Upgrade
      </Button>
    </div>
  );
};
