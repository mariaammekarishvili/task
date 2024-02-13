import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { RiDeleteBin7Line } from "react-icons/ri";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Link from "next/link";

interface ActionProps {
  userId: number;
}

const TableActions: React.FC<ActionProps> = ({ userId }) => {
  return (
    <>
      <div className="h-4 w-4 " data-tooltip-id="my-tooltip-1">
        <HiOutlineDotsVertical className="cursor-pointer" />
      </div>

      <ReactTooltip
        variant="light"
        className="bg-[none] opacity-1"
        noArrow
        id="my-tooltip-1"
        place="bottom"
        positionStrategy="fixed"
        opacity={1}
        openOnClick={true}
        offset={-5}
      >
        <div className="w-62  h-22 rounded-lg p-1 absolute bg-white left-[-200px] shadow-lg">
          <Link href={`users/profile?id=${userId}`}>
            <div className="w-60 h-[39px] text-[#474747] cursor-pointer hover:bg-slate-400 text-sm px-4 py-2.5 rounded-lg flex items-center">
              <FaRegUser className="mr-2" /> პროფილის ნახვა
            </div>
          </Link>
          <div className="w-60 cursor-pointer h-[39px] text-[#7A0000] text-sm px-4 py-2.5 rounded-lg flex items-center">
            <RiDeleteBin7Line color="#7A0000" className="mr-2" /> მომხმარებლის
            გაუქმება
          </div>
        </div>
      </ReactTooltip>
    </>
  );
};

export default TableActions;
