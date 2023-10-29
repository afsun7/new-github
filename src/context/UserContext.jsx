import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();
export default function UserProvider({ children }) {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [loadingImage, setLoading] = useState(false);
  const [loadingUser, setloadingUser] = useState(false);
  const [nameUser, setName] = useState("");
  const [user, setUser] = useState([]);
  const [repo, setRepo] = useState([]);

  //get users
  async function getSearch() {
    if (text) {
      setLoading(true);
      const { data } = await axios.get(
        `https://api.github.com/search/users?q=${text}`
      );
      setTimeout(() => {
        setData([...data.items]);
        setLoading(false);
      }, 1000);

      setText("");
    }
  }
  useEffect(() => {
    getSearch();
  }, [text]);
  //end get users

  //get users specifications
  async function getUsers() {
    setloadingUser(true);
    const { data } = await axios.get(
      `https://api.github.com/users/${nameUser}`
    );
    setTimeout(() => {
      setUser(data);
      setloadingUser(false);
    }, 1000);
  }
  useEffect(() => {
    getUsers();
  }, [nameUser]);
  //end get users specifications

  //get list repositories
  async function getRepo() {
    const { data } = await axios.get(
      ` https://api.github.com/users/${nameUser}/subscriptions`
    );
    setRepo(data);
  }
  useEffect(() => {
    getRepo();
  }, [nameUser]);
  //end get list repositories

  return (
    <UserContext.Provider
      value={{
        setData,
        setText,
        data,
        loadingImage,
        loadingUser,
        nameUser,
        setName,
        user,
        repo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
