"use client"

import Link from "next/link"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className="border-b border-[#e0d4c0] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="bg-[#f5e6d3]/80">

        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          <Link href="/" className="flex flex-col">
            <span className="text-xl font-bold text-[#3b2416] tracking-wide">
              BREWNEST
            </span>
            <span className="text-xs text-[#6f4e37]">
              Where comfort meets coffee...
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="px-5 py-2 rounded-lg bg-[#6f4e37] text-white hover:bg-[#5a3f2c] transition">
                  Menu
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="bg-white border border-[#e0d4c0]">

                <DropdownMenuGroup>
                  <Link href="/menu/coffee">
                    <DropdownMenuItem className="cursor-pointer">
                      Coffee
                    </DropdownMenuItem>
                  </Link>

                  <Link href="/menu/refreshers">
                    <DropdownMenuItem className="cursor-pointer">
                      Refreshers
                    </DropdownMenuItem>
                  </Link>

                  <Link href="/menu/desserts">
                    <DropdownMenuItem className="cursor-pointer">
                      Desserts
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuGroup>

              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/about"
              className="text-[#3b2416] font-medium hover:text-[#6f4e37] transition"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-[#3b2416] font-medium hover:text-[#6f4e37] transition"
            >
              Contact
            </Link>

          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#3b2416] text-2xl"
          >
            ☰
          </button>

        </div>

        {open && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-[#3b2416]">

            <Link href="/menu/coffee" onClick={() => setOpen(false)}>
              Coffee
            </Link>

            <Link href="/menu/refreshers" onClick={() => setOpen(false)}>
              Refreshers
            </Link>

            <Link href="/menu/desserts" onClick={() => setOpen(false)}>
              Desserts
            </Link>

            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>

            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>

          </div>
        )}

      </div>
    </nav>
  )
}