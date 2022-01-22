import Link from "next/link";
import { ReactNode } from "react";

interface FloatingButtonProps {
  children: ReactNode;
  href: string;
}

export default function FloatingButton({
  children,
  href,
}: FloatingButtonProps) {
  return (
    <Link href={href}>
      <a className="fixed bottom-24 right-5 bg-purple-400 rounded-full text-white p-4 shadow-xl hover:bg-purple-300 transition-colors border-transparent cursor-pointer w-14 flex items-center justify-center">
        {children}
      </a>
    </Link>
  );
}
