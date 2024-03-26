import { FC, useState } from "react";
import { ChartWrapper } from "./ChartWrapper";
import { Header } from "./Header";
import { tableData } from "@/data/tableData";

export const Table = () => {
  const [data] = useState(tableData);
  return (
    <ChartWrapper>
      <div className="">
        <Header header_text={"Installed apps"} />
        {/* table-start */}
        <div className="overflow-x-scroll md:overflow-hidden">
          <table className="table-fixed w-full">
            {/* table-header */}
            <tr className="text-[#5F6980] bg-[#F9FAFB]">
              <td className="px-4 py-3 w-[8rem]">Source</td>
              <td className="">Amount</td>
              <td className="">Status</td>
              <td className="">User ID</td>
              <td className="">Joined</td>
              <td className="">Group</td>
            </tr>

            {/* table-body */}
            {data.map((item, index) => (
              <TableRowComponent
                key={index}
                source={item.source}
                amount={item.amount}
                status={item.status}
                user_id={item.user_id}
                joined={item.joined}
                group={item.group}
              />
            ))}
          </table>
        </div>
        {/* ------------ table-end ------ */}

        {/* pagination */}
        <div className="flex justify-center items-center gap-4 py-5">
          <button>x</button>
          <p>1/15</p>
          <button>y</button>
        </div>
      </div>
    </ChartWrapper>
  );
};

interface TableRow {
  source: {
    logo: string;
    name: string;
  };
  amount: string;
  status: string;
  user_id: string;
  joined: string;
  group: string;
}

export const TableRowComponent: FC<TableRow> = ({
  source,
  amount,
  status,
  user_id,
  joined,
  group,
}) => {
  return (
    <tr className="border-b border-1-[#EAECF0]">
      <td className="p-4">
        <p className="flex gap-2">
          <img src={`${source.logo}`} alt="X" />
          {source.name}
        </p>
      </td>
      <td>{amount}</td>
      <td>{status}</td>
      <td>{user_id}</td>
      <td>{joined}</td>
      <td>{group}</td>
    </tr>
  );
};
