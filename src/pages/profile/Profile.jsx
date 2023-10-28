import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Profile() {
  const { name } = useParams();
  const [user, setUser] = useState([]);

  async function getUsers() {
    const { data } = await axios.get(`https://api.github.com/users/${name}`);
    setUser(data);
  }
  useEffect(() => {
    getUsers();
  }, [name]);
  console.log(user);
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
          {user.hireable ? (
            <i className="fa fa-check text-green-700 "></i>
          ) : (
            <i className="fa fa-close text-red-600"></i>
          )}
        </span>
      </div>
      <div className="border border-dotted border-[#ccc] grid grid-cols-2">
        <div className="m-auto text-center py-4">
          <img
            src={`https://avatars.githubusercontent.com/u/${user?.id}?v=4`}
            alt="avatar picture"
            className="w-[150px] rounded-full "
          />
          <div>{user?.name}</div>
          <div>{user?.location}</div>
        </div>
        <div className="mr-auto ">
          {user?.bio && (
            <div>
              Bio :<div>{user.bio}</div>
            </div>
          )}
          {user?.html_url && (
            <Link to={`https://github.com/${user.login}`}>
              <div
                className="transition bg-[#333] text-white px-7 py-[6px]
            hover:text-gray-500 hover:bg-gray-600"
              >
                Visit Github Page
              </div>
            </Link>
          )}
          {user?.login && (
            <span>
              Login : <span>{user.login}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
