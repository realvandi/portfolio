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
        className="flex flex-col justify-center items-center "
        style={{ height: `calc(100vh - ${NAVBAR_HEIGHT})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        key="who"
      >
        <motion.div
          initial={{ opacity: 0 }} // Initial state
          animate={{ opacity: 1 }} // Animation state
          transition={{ delay: 1.0 }} // Delay the animation for 1 second
        >
          My Name is
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }} // Initial state
          animate={{ opacity: 1 }} // Animation state
          transition={{ delay: 2.0 }} // Delay the animation for 1 second
        >
          Dylan Alvandi
        </motion.div>
      </motion.div>
    </>
  );
}
