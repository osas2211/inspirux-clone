"use client"
import React from "react"
import { Logo } from "./Logo"
import Link from "next/link"

export const Header = () => {
  return (
    <div className="w-full fixed top-0 left-0 text-[#eee] z-[100]">
      <div className="w-full px-5 md:px-10 py-[10px] flex items-center justify-between border-b-[1px] border-b-gray-300/30 bg-[#0f0f11]/90 backdrop-blur-[5px] uppercase text-sm">
        <Logo />
        <ul className="flex items-center gap-14">
          <li className="signal-line-link">
            <Link href={""}>Works</Link>
          </li>
          <li className="signal-line-link">
            <Link href={""}>expertise</Link>
          </li>
          <li className="signal-line-link">
            <Link href={""}>about</Link>
          </li>
          <li className="signal-line-link">
            <Link href={""}>insights</Link>
          </li>
        </ul>
        <div>
          <Link href={""} className="signal-line-link inline-block">
            contact
          </Link>
        </div>
      </div>
    </div>
  )
}
