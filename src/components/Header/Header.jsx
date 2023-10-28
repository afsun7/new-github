import React from "react";
import Logo from "./logo/Logo";
import HeaderLink from "./headerLink/HeaderLink";

export default function Header() {
  return (
    <div className=" w-full px-8 py-[0.9rem] bg-[#DF4957] text-white flex justify-between items-center ">
      <Logo />
      <HeaderLink />
    </div>
  );
}
