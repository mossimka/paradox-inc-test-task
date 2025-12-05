"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex items-center justify-between p-4 bg-gray-200">
      <h1>Cool Header</h1>
      <nav className="flex gap-16">
        <Link
          className={`m-2 ${
            isActive("/") ? "bg-green-800 text-white" : "bg-gray-400"
          } rounded-md px-2 py-1`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`m-2 ${
            isActive("/documents") ? "bg-green-800 text-white" : "bg-gray-400 "
          } rounded-md px-2 py-1`}
          href="/documents"
        >
          Documents
        </Link>
        <Link
          className={`m-2 ${
            isActive("/chat") ? "bg-green-800 text-white" : "bg-gray-400"
          } rounded-md px-2 py-1`}
          href="/chat"
        >
          Chat
        </Link>
      </nav>
    </div>
  );
};

export default Header;
