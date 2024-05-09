"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  label: string;
  iconScr: string;
  href: string;
};

export const SidebarItem = ({ label, iconScr, href }: Props) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <div>
      <Button
        className="w-full justify-start h-[52px]"
        variant={active ? "sidebarOutline" : "sidebar"}
        asChild
      >
        <Link href={href}>
          <Image
            src={iconScr}
            alt={label}
            className="mr-5"
            height={32}
            width={32}
          />
          {label}
        </Link>
      </Button>
    </div>
  );
};
