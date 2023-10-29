import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
export default function Bio() {
    const {user}=useContext(UserContext)
  return (
    <section className="border border-dotted border-[#ccc] grid grid-cols-2 mb-3">
      <div className="flex flex-col justify-center items-center py-4">
        <img
          src={`https://avatars.githubusercontent.com/u/${user.id}?v=4`}
          alt="avatar picture"
          className="w-[150px] rounded-full "
        />
        <p>{user.name}</p>
        <p>{user.location}</p>
      </div>
      <div className="flex flex-col items-start justify-center gap-1">
        {user.bio && (
          <>
            <p className="font-bold text-xl">
              Bio :<p className=" font-normal text-base">{user.bio}</p>
            </p>

            <Link to={`https://github.com/${user.login}`}>
              <p className="transition bg-[#333] text-white my-3 px-7 py-[6px] hover:text-gray-500 hover:bg-gray-600">
                Visit Github Page
              </p>
            </Link>
            {user.login && (
              <p>
                Login : <span>{user.login}</span>
              </p>
            )}
            {user.company && (
              <p>
                Company : <span>{user.company}</span>
              </p>
            )}

            {user.blog && (
              <p>
                Website : <span>{user.blog}</span>
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
}
