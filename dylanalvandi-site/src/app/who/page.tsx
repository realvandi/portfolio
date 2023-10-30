"use client";

import React, { Suspense, useEffect, useState } from "react";
import { NAVBAR_HEIGHT } from "../sizes";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <div style={{ marginTop: NAVBAR_HEIGHT }} key="top"></div>
      <motion.div
        className="flex flex-col justify-center items-center w-screen"
        initial={{ opacity: 0, transform: "translateY(30px)" }}
        animate={{ opacity: 1, transform: "translateY(0px)" }}
        exit={{ opacity: 0 }}
        key="who"
      >
        Who?
      </motion.div>
    </>
  );
}
