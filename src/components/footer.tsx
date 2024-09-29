import Image from "next/image";
import React from "react";

import logo from "../assets/logo.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full px-32 mt-32 bg-orange-500 py-16 flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col justify-center items-center gap-4">
        <Image src={logo} alt="Logo do nosso site sobre o Nordeste" />
        <p className="text-black-100 font-medium text-sm">
          Feito por <strong>Lucas Daher</strong>,{" "}
          <strong>Marcos Alexandre</strong> e <strong>Ramon Miguel</strong>.
        </p>
      </div>

      <nav>
        <ul className="flex flex-row justify-center items-center gap-8">
          <Link href="/">
            <li className="text-base font-medium text-black/80 hover:text-orange-100 hover:transform hover:-translate-y-1 transition-all duration-200">
              Início
            </li>
          </Link>
          <Link href="/historia">
            <li className="text-base font-medium text-black/80 hover:text-orange-100 hover:transform hover:-translate-y-1 transition-all duration-200">
              História
            </li>
          </Link>
          <Link href="/turismo">
            <li className="text-base font-medium text-black/80 hover:text-orange-100 hover:transform hover:-translate-y-1 transition-all duration-200">
              Turismo
            </li>
          </Link>
          <Link href="/cultura">
            <li className="text-base font-medium text-black/80 hover:text-orange-100 hover:transform hover:-translate-y-1 transition-all duration-200">
              Cultura
            </li>
          </Link>
        </ul>
      </nav>
    </footer>
  );
}
