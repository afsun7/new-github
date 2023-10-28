import React from "react";
import { Link } from "react-router-dom";
export default function Carduser({ id, login }) {
  return (
    <div className="border border-dotted border-[#ccc] flex flex-col items-center p-4 mb-4 gap-3">
      <img
        src={`https://avatars.githubusercontent.com/u/${id}?v=4`}
        alt="avatar picture"
        className="w-[50px] rounded-full"
      />
      <h3 className=" text-lg font-bold text-[#333]">{login}</h3>
      <Link to={`/user/${login}`}>
        <div className="transition bg-[#333] text-white px-[14px] py-[6px] text-sm mb-2 hover:text-gray-500 hover:bg-gray-600">
          More
        </div>
      </Link>
    </div>
  );
}
