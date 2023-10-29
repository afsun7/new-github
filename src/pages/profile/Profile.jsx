import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import loading from "../../assets/loading.gif";
import Bio from "./bio/Bio";

import { UserContext } from "../../context/UserContext";
import Follow from "./follow/Follow";
import Repository from "./repository/Repository";

export default function Profile() {
  const { name } = useParams();
  const { setName, user, loadingUser } = useContext(UserContext);
  setName(name);

  return (
    <div className="-mt-4">
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
      <Bio />
      <Follow />
      <Repository />
      {loadingUser ? (
        <div className="m-auto w-[4%] mt-20 ">
          <img src={loading}></img>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
