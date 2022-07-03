import Container from "./Container";
import Head from "next/head";
import Link from "next/link";

import { ShoppingCartIcon, MenuIcon, UserIcon } from "@heroicons/react/outline";

export default function Index({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title ? title : "my shop"}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Container>
        <Navbar />
        <hr />
        {children}
        <hr />
        <Footer />
      </Container>
    </div>
  );
}

function NavIcon({ children }) {
  return (
    <div className="rounded-full hover:bg-gray-200 h-10 w-10 flex items-center justify-center cursor-pointer">
      {children}
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex items-center justify-between space-x-8">
      <Link href="/">
        <div className="cursor-pointer">
          <h1 className="font-semibold text-5xl">
            <span className="text-lg">things for sale @</span>
            <br />
            my shop
          </h1>
        </div>
      </Link>
      <div className="flex justify-end items-center space-x-2 bg-gray-100 p-2 rounded-full">
        <NavIcon>
          <UserIcon className="w-6 h-6" />
        </NavIcon>
        <div className="relative">
          <NavIcon>
            <ShoppingCartIcon className="w-6 h-6" />
          </NavIcon>
          <div className="absolute top-0 right-0 bg-black w-4 h-4 rounded-full text-white flex items-center justify-center font-medium text-xs">
            1
          </div>
        </div>
        <NavIcon>
          <MenuIcon className="w-6 h-6" />
        </NavIcon>
      </div>
    </div>
  );
}

function Footer({}) {
  return (
    <footer>
      <small className="text-gray-500">copyright my shop 2022</small>
    </footer>
  );
}
