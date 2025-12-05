import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Github, Home, Info, Cog, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-8 mt-8">
      <div className="">
        <div className="flex items-center">
          <Image
            src="/logo.webp"
            alt="Test task Logo"
            width={200}
            height={100}
            className=""
          />
          <h1 className="">Test task</h1>
          <p className="">Tables, websockets, and more</p>
        </div>
        <nav className="flex gap-8 justify-center my-4">
          <Link href="#top" className="">
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link href="/documents" className="">
            <Info size={18} />
            <span>Documents</span>
          </Link>
          <Link href="/chat" className="">
            <MessageCircle size={18} />
            <span>Chat</span>
          </Link>
          <Link
            className=""
            href="https://github.com/mossimka/paradox-inc-test-task"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={24} />
          </Link>
        </nav>
      </div>
      <p className="">All rights reserved 2025</p>
    </footer>
  );
};

export default Footer;
