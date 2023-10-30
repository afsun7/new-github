import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";

export default function Hireable() {
  const { user } = useContext(UserContext);
  return (
    <div className="mb-2">
      <Link to="/">
        <button className="px-5 py-2  bg-[#f6f6f6] text-[#898989]">
          Back To Search
        </button>
      </Link>
      <span className="ml-2">
        hireable :
        {user?.hireable ? (
          <i className="fa fa-check text-green-700 "></i>
        ) : (
          <i className="fa fa-close text-red-600"></i>
        )}
      </span>
    </div>
  );
}
