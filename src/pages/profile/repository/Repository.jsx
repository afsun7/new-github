import React, { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { Link } from "react-router-dom";

export default function Repository() {
  const { repo } = useContext(UserContext);
  return (
    <div className="flex flex-col-reverse my-3 gap-3">
      {repo.slice(-5).map((item) => (
        <div
          key={item.id}
          className="border border-dotted border-[#ccc] w-[100%] text-base py-5 px-4 text-red-600 font-bold hover:text-gray-500"
        >
          <Link to={`https://github.com/${item.full_name}`}>
            <p>{item.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
