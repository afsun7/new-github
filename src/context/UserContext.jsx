import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();
export default function UserProvider({ children }) {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [loadingImage, setLoading] = useState(false);

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

  return (
    <UserContext.Provider value={{ setData, setText, data, loadingImage }}>
      {children}
    </UserContext.Provider>
  );
}
