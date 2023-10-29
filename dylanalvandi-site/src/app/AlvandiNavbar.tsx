"use client"

import { Navbar } from "@nextui-org/navbar";
import { NavbarContent } from "@nextui-org/navbar";
import { NavbarBrand, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";

import Link from "next/link";
import React, { useState } from "react";
import { NAVBAR_HEIGHT } from "./sizes";

type Props = {};

export default function AlvandiNavbar({}: Props) {
  return (
    <Navbar isBlurred onMenuOpenChange={()=>{}} className={`h-[${NAVBAR_HEIGHT}] absolute`} position="sticky">
      <NavbarContent>
        <NavbarBrand>
          <p className="text-inherit">D</p><p className="font-bold text-inherit">ALVANDI</p>
        </NavbarBrand>
      </NavbarContent>
    </Navbar>
  );
}
