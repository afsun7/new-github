import React, { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

export default function Follow() {
  const { user } = useContext(UserContext);
  return (
    <section className="border border-dotted border-[#ccc] flex gap-2 justify-center items-center h-20 ">
      <div className="bg-[#DC3545] px-3 rounded-md text-sm py-1 text-white ">
        Followers : {user.followers}
      </div>
      <div className="bg-[#f4f4f4] border border-[#ccc] px-3 rounded-md text-sm py-1 text-gray-900 ">
        Following : {user.following}
      </div>
      <div className="bg-[#28a745] px-3 rounded-md text-sm py-1 text-white ">
        Public Repos : {user.public_repos}
      </div>
      <div className="bg-[#333] px-3 rounded-md text-sm py-1 text-white ">
        Public Gists : {user.public_gists}
      </div>
    </section>
  );
}
