import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import loading from "../../assets/loading.gif";
import Bio from "./bio/Bio";

import { UserContext } from "../../context/UserContext";
import Follow from "./follow/Follow";
import Repository from "./repository/Repository";
import Hireable from "./hireable/Hireable";

export default function Profile() {
  const { name } = useParams();
  const { setName, user, loadingUser } = useContext(UserContext);
  setName(name);
  return (
    <>
      {loadingUser ? (
        <div className="m-auto w-[4%] mt-20 ">
          <img src={loading}></img>
        </div>
      ) : (
        <div className="-mt-4">
          <Hireable />
          <Bio />
          <Follow />
          <Repository />
        </div>
      )}
    </>
  );
}
