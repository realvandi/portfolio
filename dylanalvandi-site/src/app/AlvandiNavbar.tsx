"use client";

import { Navbar } from "@nextui-org/navbar";
import { NavbarContent } from "@nextui-org/navbar";
import {
  NavbarBrand,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";

import Link from "next/link";
import React, { useState } from "react";
import { NAVBAR_HEIGHT } from "./sizes";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

type Props = {};

export default function AlvandiNavbar({}: Props) {
  return (
    <Navbar
      isBlurred
      onMenuOpenChange={() => {}}
      className={`h-[${NAVBAR_HEIGHT}] absolute`}
      position="sticky"
    >
      <NavbarContent justify="start">
        <NavbarBrand>
          <Link href={"/"} className="flex flex-row">
            <p className="text-inherit">D</p>
            <p className="font-bold text-inherit">ALVANDI</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center" className="">
        <NavbarItem className="text-neutral-400 hover:text-white transition-all">
          <Link href={""}>
            <FaArrowRight />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem className="text-neutral-400 hover:text-white transition-all">
          <Link href={"/who"}>WHO?</Link>
        </NavbarItem>
        <NavbarItem className="text-neutral-400 hover:text-white transition-all">
          <Link href={""}>PROJECTS</Link>
        </NavbarItem>
        <NavbarItem className="text-neutral-400 hover:text-white transition-all">
          <Link href={""}>CV</Link>
        </NavbarItem>
        <NavbarItem className="text-neutral-400 hover:text-white transition-all">
          <Link href={""}>SOCIALS</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
