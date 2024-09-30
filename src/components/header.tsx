import Image from "next/image";
import React from "react";

import logo from "../assets/logo.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full py-4 px-9 flex justify-start items-center gap-20 bg-orange-100/40 backdrop-blur-[20px]">
      <div className="logo">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo do nosso site Nordeste"
            className="hover:scale-105 transition-all duration-200"
          />
        </Link>
      </div>

      <nav>
        <ul className="flex justify-center items-center gap-10">
          <Link href="/">
            <li className="text-base font-medium text-black/80 hover:text-orange-600 hover:transform hover:-translate-y-1 transition-all duration-200">
              Início
            </li>
          </Link>
          <Link href="/historia">
            <li className="text-base font-medium text-black/80 hover:text-orange-600 hover:transform hover:-translate-y-1 transition-all duration-200">
              História
            </li>
          </Link>
          <Link href="/cultura">
            <li className="text-base font-medium text-black/80 hover:text-orange-600 hover:transform hover:-translate-y-1 transition-all duration-200">
              Cultura
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
