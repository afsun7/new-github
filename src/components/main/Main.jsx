import React, { Suspense, lazy, useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import loading from "../../assets/loading.gif";
import Carduser from "./cardUser/Carduser";

export default function Main() {
  const { setData, setText, data, loadingImage } = useContext(UserContext);
  const [inputValue, setInput] = useState("");

  function handelInput(e) {
    setInput(e.target.value);
    if (e.key === "Enter") {
      setData([]);
      setInput("");
      setText(inputValue);
    }
  }

  function handelForm(e) {
    e.preventDefault();
    setData([]);
    setText(inputValue);
    setInput("");
  }

  function handelClear() {
    setData([]);
  }
  return (
    <>
      <form
        className="flex flex-col justify-center gap-4"
        onSubmit={handelForm}
      >
        <input
          className="h-9 border-[1px] border-gray-400 text-xl px-2"
          placeholder="Search Users..."
          onKeyUp={handelInput}
          onChange={handelInput}
          value={inputValue}
        />
        <input type="submit" className="h-9 bg-[#333] text-white" />
        {data.length ? (
          <button className="mb-4 h-9 bg-[#f6f6f6]" onClick={handelClear}>
            Clear
          </button>
        ) : (
          <></>
        )}
      </form>

      <div className="grid grid-cols-3 gap-4 text-center ">
        {data.map((user) => (
          <div key={user.id}>
            <Carduser id={user.id} login={user.login} />
          </div>
        ))}
      </div>
      {loadingImage ? (
        <div className="m-auto w-[4%] mt-20 ">
          <img src={loading}></img>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
