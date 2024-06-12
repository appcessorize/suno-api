import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";

export default function Header() {
  return (
    <nav
      className=" flex w-full justify-center py-4 items-center 
        border-b border-gray-300  backdrop-blur-2xl font-mono text-sm px-4 lg:px-0"
    >
      <div className="max-w-3xl flex w-full items-center justify-between">
        <div className="font-medium text-xl text-indigo-900 flex items-center gap-2">
          <Logo className="w-4 h-4" />
          <Link href="/">Title</Link>
        </div>
      </div>
    </nav>
  );
}
