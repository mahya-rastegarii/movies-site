"use client";

import { BiMenu } from "react-icons/bi";

import Link from "next/link";

import Button from "../button/button";
import ChangeThemeButton from "../button/changeThemeButton";

import Logo from "../logo";

import { usePathname } from "next/navigation";
import NavSearchBar from "../search/NavSearchBar";

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    {
      name: "250 فیلم برتر IMDb",
      href: "/movies",
    },
    {
      name: "250 سریال برتر IMDb",
      href: "/series",
    },
  ];

  const buttons = [
    {
      name: "ثبت نام",
      href: "/register",
      style: " lg:ml-3 ",
    },
    {
      name: "ورود",
      href: "/login",
    },
  ];
  return (
    <div className=" w-full  z-30 bg-color-3 border-b border-color-1 overflow-x-hidden p-6 flex justify-between items-center ">
      <div className=" w-full px-2">
        <div className="lg:hidden flex justify-start items-center w-full">
          <button>
            <BiMenu className=" text-color-2 text-2xl" />
          </button>
          <NavSearchBar />
          <ChangeThemeButton />
        </div>

        <div className=" hidden lg:flex">
          <ul className=" flex    justify-start items-center space-x-3 text-sm text-md">
            {buttons.map((btn) => (
              <li key={btn.name} className={`w-24  ${btn.style}`}>
                <Link href={btn.href}>
                  <Button bgColor="bg-color-2" width="w-full" active={pathname === btn.href}>
                    {btn.name}
                  </Button>
                </Link>
              </li>
            ))}

            <li>
              <div className=" lg:flex hidden">
                <ChangeThemeButton />
              </div>
            </li>
            {links.map((link) => (
              <li key={link.name}>
                <Button
                  btnType="link"
                  width="w-full"
                  margin="ml-8"
                  // clicked={() => dispatch(fetchDataTopMovies())}
                >
                  <Link
                    href={link.href}
                    className={
                      pathname === link.href ? "text-color-2" : "text-color-1"
                    }
                  >
                    {link.name}
                  </Link>
                </Button>
              </li>
            ))}
            {/* <li>
              <Button
                btnType="link"
                width="w-full"
                ml-8
                margin="ml-8"
               
              >
                <Link
                  href="/"
                  
                >
                  250 سریال برتر IMDb
                </Link>
              </Button>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="w-full px-2 flex justify-end items-center">
        <div className="ml-6 w-6/12 hidden lg:block">
          <NavSearchBar />
        </div>
        <Link href="/">
          {" "}
          <Logo size=" text-2xl md:text-3xl lg:text-4xl" />
        </Link>
      </div>
    </div>
  );
}
