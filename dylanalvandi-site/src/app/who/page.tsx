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
  "Writing documentation(yes, really)",
];

function scrollToSectionBySegment() {
  const pathName = usePathname();

  useEffect(() => {
    const segment = pathName.split("#")[1]; // Get the segment part from the URL

    if (segment) {
      const targetSection = document.getElementById(segment);

      if (targetSection) {
        // Scroll smoothly to the target section
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathName]);
}

export enum ProjectType {
  GAME, OTHERS, WEBDEV, PROGRAMMING, MEDIA
}

type Project = {
  name: string;
  description: string;
  link?: string;
  type?: ProjectType;
};

const projects: Project[] = [
  { name: "DevDocu.com", description: "A new-form documentation site", link: "https://devdocu.com", type: ProjectType.WEBDEV },
  { name: "Quack Rush", description: "3D mobile game developed using Unreal Engine 4", type: ProjectType.GAME },
  { name: "3D Platformer System", description: "3D platformer movement system developed using Unity",  type: ProjectType.GAME },
  { name: "Catboxed", description: "3D mobile game developed using Unity",  type: ProjectType.GAME },
  { name: "iPraktikum", description: "TUM project",  type: ProjectType.WEBDEV },
  { name: "JST", description: "TUM project",  type: ProjectType.WEBDEV },
  { name: "Realvandi", description: "TikTok content", link: "https://tiktok.com/@realvandi", type: ProjectType.MEDIA },
  { name: "Supervillain", description: "Clothing line", type: ProjectType.OTHERS },
  { name: "C Huffman Tree", description: "Huffman code generator using C", type: ProjectType.PROGRAMMING },
  { name: "ASM", description: "TUM project", type: ProjectType.PROGRAMMING },
  { name: "dylanalvandi.com", description: "Personal portfolio site for Dylan Alvandi (myself)", link:'https://dylanalvandi.com', type: ProjectType.WEBDEV },
  { name: "Measure Tool", description: "Personal portfolio site for Dylan Alvandi (myself)", type: ProjectType.WEBDEV },
];

type Props = {};

export default function page({}: Props) {
  const handleDivClick = (targetLink: any) => {
    console.log(targetLink);
    const newTab = window.open(targetLink, "_blank");
  };

  return (
    <div className="">
      <section id="who" className="">
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6 bg-pink-600"
          style={{ padding: "5%", paddingTop: `calc(${NAVBAR_HEIGHT} + 5%)` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key="who"
        >
          <motion.div id="col-1" className="w-full sm:w-1/2 h-full">
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
              className="text-left text-3xl font-bold"
            >
              Dylan Alvandi 👋
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }} // Initial state
              animate={{ opacity: 1 }} // Animation state
              transition={{ delay: 0.8 }} // Delay the animation for 1 second
            >
              I'm a web developer
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
                Here are some things I've dabbled <i>relatively</i> a lot more
                with 📚:
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
                    (Photoshop, Illustrator, Flash, Premiere Pro, After Effects)
                  </small>
                </li>
                <li>Firebase</li>
              </ul>
              <Card className="my-4 text-small">
                <CardBody>
                  <b>TL;DR:</b> full stack web development, game development,
                  and design
                </CardBody>
              </Card>
            </motion.div>
          </motion.div>
          <motion.div
            id="col-2"
            className="w-full sm:w-1/2 h-full text-xl"
            initial={{ opacity: 0 }} // Initial state
            animate={{ opacity: 1 }} // Animation state
            transition={{ delay: 1.6 }} // Delay the animation for 1 second
          >
            <Divider className="my-2 py-1" />
            <small>And more stuff I've worked with 📖:</small>
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
              {hobbies.map((hobby) => {
                return (
                  <Chip
                    variant="bordered"
                    className="light text-white"
                    radius="sm"
                  >
                    <span className="font-semibold">{hobby}</span>
                  </Chip>
                );
              })}
            </div>
            <Divider className="my-2 py-1" />
            <div className="text-3xl font-bold">WHO__?</div>
            <div className="text-medium">
              Made in <b>Jakarta</b> 🇮🇩. Currently<sup>(2023)</sup>{" "}
              <b>based in Munich</b>. I love{" "}
              <b>
                learning about anything, creating new things, working in teams,
                and chatting with people
              </b>
              . Did you know there's a programming language called{" "}
              <Link href="https://en.wikipedia.org/wiki/Dylan_(programming_language)">
                <b>Dylan</b>
              </Link>
              <small>(I am not affiliated with Dylan)</small>?
            </div>
            <Card className="my-4 text-small">
              <CardBody>
                <b>Dylan's Note:</b> This site is still under construction, but
                I'm working on it! Here's an ice cream 🍦
              </CardBody>
            </Card>
          </motion.div>
        </motion.div>
      </section>
      <section id="projects" className="">
        <motion.div
          className="flex flex-col justify-center items-center bg-black p-[5%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key="who"
        >
          <motion.div className="text-5xl font-bold mb-6">PR__OJECTS</motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {projects.map((project) => {
              return (
                <Card
                  isFooterBlurred
                  className=" scale-100 hover:scale-105 transition-all cursor-pointer flex items-center justify-center"
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
                >
                  <CardHeader className="font-bold text-xl flex flex-row gap-3">
                    <div className="text-4xl">
                      <AlvandiProjectIcon type={project.type}/>
                    </div>
                    <div>{project.name}</div>
                  </CardHeader>
                  <Divider></Divider>
                  <CardBody>{project.description}</CardBody>
                </Card>
              );
            })}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
