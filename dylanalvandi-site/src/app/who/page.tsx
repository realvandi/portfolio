"use client";

import React, { Suspense, useEffect, useState } from "react";
import { NAVBAR_HEIGHT } from "../sizes";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Link,
} from "@nextui-org/react";
import { Fa500Px } from "react-icons/fa";
import AlvandiProjectIcon from "../components/AlvandiProjectIcon";
import { Project, ProjectType } from "../types";
import Image from "next/image";

const hobbies = [
  "Volleyball",
  "Art",
  "Cooking",
  "Keyboards",
  "Walks",
  "Chatting",
  "Content Creation",
  "Gaming",
  "Sports",
  "Design",
  "Web Dev",
  "Reading",
  "Game Development",
  "Photography",
  "3D modelling",
  "Travel",
  "Trying out new stuff",
];

const projects: Project[] = [
  {
    name: "Devdocu.com",
    description: "A POC project for a new form of framework documentation",
    link: "https://devdocu.com",
    type: ProjectType.WEBDEV,
  },
  {
    name: "Quack Rush",
    description:
      "3D mobile game developed using Unreal Engine 4(contact me for more info)",
    type: ProjectType.GAME,
  },
  {
    name: "3D Platformer System",
    description:
      "3D platformer movement system developed using Unity(contact me for more info)",
    type: ProjectType.GAME,
  },
  {
    name: "Catboxed",
    description:
      "3D mobile game developed using Unity(contact me for more info)",
    type: ProjectType.GAME,
  },
  {
    name: "iPraktikum",
    description:
      "Web development project for B/S/H Werkstatt(contact me for more info)",
    type: ProjectType.WEBDEV,
  },
  {
    name: "JST",
    description:
      "Web development project for Maltego Technologies GmbH(contact me for more info)",
    type: ProjectType.WEBDEV,
  },
  {
    name: "Realvandi",
    description: "TikTok content",
    link: "https://tiktok.com/@realvandi",
    type: ProjectType.MEDIA,
  },
  {
    name: "Supervillain",
    description: "Clothing line(contact me for more info)",
    type: ProjectType.OTHERS,
  },
  {
    name: "C Huffman Tree",
    description:
      "Huffman code generator using C + ASM(contact me for more info)",
    type: ProjectType.PROGRAMMING,
  },
  {
    name: "JSON Parser",
    description: "Assembly Code(contact me for more info)",
    type: ProjectType.PROGRAMMING,
  },
  {
    name: "Laplace Function",
    description: "Assembly Code(contact me for more info)",
    type: ProjectType.PROGRAMMING,
  },
  {
    name: "dylanalvandi.com",
    description: "Personal portfolio site for Dylan Alvandi (myself)",
    link: "https://dylanalvandi.com",
    type: ProjectType.WEBDEV,
  },
  {
    name: "Measure Tool",
    description: "On-screen protractor with image inputs",
    type: ProjectType.WEBDEV,
    link: "https://github.com/realvandi/measuretool",
  },
  {
    name: "'Squid Game' POC Game",
    description:
      "A POC game developed in Unity to experiment with NPCs with ragdoll physics movement(contact me for more info)",
    type: ProjectType.GAME,
  },
  {
    name: "Tickables",
    description:
      "A social media productivity site centered around community checklists, checklists, and roadmaps.",
    type: ProjectType.WEBDEV,
    link: "https://tickables.com",
  },
  {
    name: "Sandwich Game",
    description:
      "A mobile game developed using Unreal Engine 4 C++ and Blueprints(contact me for more info).",
    type: ProjectType.GAME,
  },
  {
    name: "Rotting Donuts WebToon",
    description: "A comic strip series which was released on WebToon.",
    type: ProjectType.MEDIA,
  },
];

type Props = {};

export default function page({}: Props) {
  const handleDivClick = (targetLink: any) => {
    console.log(targetLink);
    const newTab = window.open(targetLink, "_blank");
  };

  return (
    <>
      <motion.div
        className=""
        style={{
          backgroundImage: "url(/bg-shadows.png)",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <section id="who" className="z-10">
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-6"
            style={{ padding: "5%", paddingTop: `calc(${NAVBAR_HEIGHT} + 5%)` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key="who"
          >
            <motion.div id="col-1" className="w-full sm:w-1/2 h-full z-10">
              <motion.div
                className="text-left text-medium"
                initial={{ opacity: 0 }} // Initial state
                animate={{ opacity: 1 }} // Animation state
                transition={{ delay: 0.0 }} // Delay the animation for 1 second
              >
                <b>Hi!</b> My Name is
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }} // Initial state
                animate={{ opacity: 1 }} // Animation state
                transition={{ delay: 0.4 }} // Delay the animation for 1 second
                className="text-left text-3xl font-bold
               bg-gradient-to-br from-blue-600 via-purple-500 to-blue-600 text-transparent bg-clip-text"
              >
                Dylan Alvandi 👋
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }} // Initial state
                animate={{ opacity: 1 }} // Animation state
                transition={{ delay: 0.8 }} // Delay the animation for 1 second
              >
                I&apos;m a web developer
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }} // Initial state
                animate={{ opacity: 1 }} // Animation state
                transition={{ delay: 1.2 }} // Delay the animation for 1 second
                className="text-left text-xl"
              >
                <br />
                <Divider className="my-2 py-1" />
                <small>
                  Here are some things I&apos;ve dabbled <i>relatively</i> a lot
                  more with 📚:
                </small>
                <ul className="font-bold">
                  <li>React/React Native</li>
                  <li>Three.js</li>
                  <li>
                    Redux
                    <small className="font-thin">
                      (Redux, React-Redux, Redux Toolkit)
                    </small>
                  </li>
                  <li>Next.js</li>
                  <li>NestJS</li>
                  <li>Spring Boot</li>
                  <li>Unity C#</li>
                  <li>Unreal Engine 4 C++ and Blueprints</li>
                  <li>Blender</li>
                  <li>Java</li>
                  <li>HTML/CSS/JS</li>
                  <li>
                    Adobe
                    <small className="font-thin">
                      (Photoshop, Illustrator, Flash, Premiere Pro, After
                      Effects)
                    </small>
                  </li>
                  <li>Firebase</li>
                </ul>
                <Card
                  className="my-4 text-small shadow-lg shadow-neutral-900"
                  isBlurred
                >
                  <CardBody>
                    <b>TL;DR:</b> full stack web development, game development,
                    and design
                  </CardBody>
                </Card>
              </motion.div>
            </motion.div>
            <motion.div
              id="col-2"
              className="w-full sm:w-1/2 h-full text-xl z-10"
              initial={{ opacity: 0 }} // Initial state
              animate={{ opacity: 1 }} // Animation state
              transition={{ delay: 1.6 }} // Delay the animation for 1 second
            >
              <Divider className="my-2 py-1" />
              <small>And more stuff I&apos;ve worked with 📖:</small>
              <ul className="font-bold">
                <li>Python</li>
                <li>Swift + SwiftUI</li>
                <li>C/ASM</li>
                <li>C++20</li>
                <li>C#</li>
                <li>PSQL</li>
                <li>Flutter</li>
              </ul>
              <Divider className="my-2 py-1" />
              <small>❤️</small>
              <div className="flex flex-wrap gap-2">
                {hobbies.map((hobby, key) => {
                  return (
                    <Chip
                      variant="light"
                      className="light text-white"
                      style={{
                        boxShadow: "0px 0px 7px 0px rgb(255,255,255, 0.1)",
                      }}
                      radius="sm"
                      key={key}
                    >
                      <span className="font-semibold">{hobby}</span>
                    </Chip>
                  );
                })}
              </div>
              <Divider className="my-2 py-1" />
              <div
                className="text-3xl font-bold
            bg-gradient-to-br from-blue-600 via-teal-600 to-blue-600 text-transparent bg-clip-text"
              >
                WHO__?
              </div>
              <div className="text-medium">
                Made in <b>Jakarta</b> 🇮🇩. Currently<sup>(2023)</sup>{" "}
                <b>based in Munich</b>. I love{" "}
                <b>
                  learning about anything, creating new things, working in
                  teams, and chatting with people
                </b>
                . Did you know there's a programming language called{" "}
                <Link href="https://en.wikipedia.org/wiki/Dylan_(programming_language)">
                  <b>Dylan</b>
                </Link>
                <small>(I am not affiliated with Dylan)</small>?
              </div>
              <Card
                className="my-4 text-small shadow-lg shadow-neutral-900"
                isBlurred
              >
                <CardBody>
                  <b>Dylan&apos;s Note:</b> This site is still under
                  construction, but I&apos;m working on it! Here&apos;s an ice
                  cream 🍦
                </CardBody>
              </Card>
            </motion.div>
          </motion.div>
        </section>
        {/* <section>
          <motion.div
            className="h-[50px] relative w-full -translate-y-[100px] z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ></motion.div>
        </section> */}
        <motion.div className="h-[0px] w-full absolute top-10 z-0">
          <img
            src="/dalcurl.svg"
            style={{ width: "110%", objectFit: "cover" }}
          ></img>
        </motion.div>
        <motion.div className="h-[0px] w-full z-0">
          <img
            src="/dalcurl2.svg"
            style={{ width: "110%", objectFit: "cover" }}
          ></img>
        </motion.div>
        <section id="projects" className="z-10">
          <motion.div
            className="flex flex-col justify-center items-center p-[5%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key="who"
          >
            <motion.div
              className="text-5xl font-bold mb-3
          bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text
          w-full text-left
          "
            >
              PR__OJECTS
            </motion.div>
            <motion.div className="mb-6 opacity-60 w-full text-left">
              Here are some projects I've worked on, or am working on!
            </motion.div>
            <div className="w-full flex flex-wrap gap-3">
              {projects.map((project, key) => {
                return (
                  <Card
                    isFooterBlurred
                    className=" scale-100 hover:scale-[102%] transition-all cursor-pointer flex items-center justify-center
                  ring-0 hover:ring-blue-600 hover:ring-4 w-[20rem] h-[10rem]"
                    isPressable
                    onClick={(e: any) => {
                      if (project.link) {
                        handleDivClick(project.link);
                      } else {
                        handleDivClick(
                          "https://www.linkedin.com/in/dylanalvandi/"
                        );
                      }
                    }}
                    key={key}
                  >
                    <CardHeader className="font-bold text-xl flex flex-row gap-3">
                      <div className="text-4xl">
                        <AlvandiProjectIcon type={project.type} />
                      </div>
                      <div className="flex flex-col text-left">
                        <div>{project.name}</div>
                        <div className=" text-sm text-neutral-500 ">
                          {ProjectType[project.type as number]}
                        </div>
                      </div>
                    </CardHeader>
                    <CardFooter>
                      <div className=" flex flex-col items-start">
                        <div className=" text-xs text-neutral-300 font-thin">
                          Description
                        </div>
                        <div className=" text-start text-sm">{project.description}</div>
                      </div>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </motion.div>
        </section>
        <section
          id="footer"
          className="w-full p-10 border-t-1 border-opacity-25 border-opacity border-t-neutral-300"
        >
          © 2023-{new Date().getFullYear()} Dylan Alvandi
        </section>
      </motion.div>
    </>
  );
}
