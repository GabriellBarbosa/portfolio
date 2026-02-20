"use client";

import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function MobileMenu({
  links,
}: {
  links: { to: string; label: string }[];
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="lg:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent
        className="pl-4 space-y-4 pt-[20px] text-xl w-72 bg-white text-zinc-900"
        side="right"
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <SheetTitle>Seções da página</SheetTitle>

        {links.map(({ to, label }, index) => (
          <SheetClose asChild key={index}>
            <Link className="block" href={to}>
              {label}
            </Link>
          </SheetClose>
        ))}
      </SheetContent>
    </Sheet>
  );
}
