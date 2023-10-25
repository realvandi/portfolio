"use client"

import { Navbar } from "@nextui-org/navbar";
import { NavbarContent } from "@nextui-org/navbar";
import { NavbarBrand, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";

import Link from "next/link";
import React, { useState } from "react";

type Props = {};

export default function AlvandiNavbar({}: Props) {
  return (
    <Navbar onMenuOpenChange={()=>{}}>
      <NavbarContent>
        <NavbarBrand>
          <p className="font-bold text-inherit">DYLAN ALVANDI</p>
        </NavbarBrand>
      </NavbarContent>
    </Navbar>
  );
}
