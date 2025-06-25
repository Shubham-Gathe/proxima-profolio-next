"use client";
import React from "react";
import { ShootingStars } from "./components/ui/shooting-stars";
import { StarsBackground } from "./components/ui/stars-background";
import { HoverBorderGradient } from "./components/ui/hover-border-gradient";
import { WobbleCard } from "./components/ui/wobble-card";
import { PinContainer } from "./components/3d-pin";
import { motion } from "framer-motion";
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";
import { LinkPreview } from "./components/ui/link-preview";
import { SiFramer, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";
import { ContactForm } from "./components/ContactForm";
import FloatingModelBackground from "./components/FloatingModelBackground";
import CustomCursor from "./components/CustomCursor"; // <-- import at the top
import Header from "./components/Header";
import { CardSpotlight } from "./components/ui/card-spotlight";
import Image from "next/image";

export default function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <>
      <Header />
      <CustomCursor />
      <div className="pt-20" />
      {/* Banner Section with subtle entrance animations */}
      <div id="banner" className="h-[60rem] rounded-md flex flex-col items-center justify-center relative w-full">
        <FloatingModelBackground />
        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex-col md:flex-row z-10 text-xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8"
          style={{ fontSize: "8rem", lineHeight: 1, fontWeight: 900 }}
        >
          Proxima Cloud
        </motion.h1>
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-xl md:text-3xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium mt-4"
        >
          We Craft Digital Experiences That Matter
        </motion.span>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-2"
        >
          A passionate team of creators building unique, scalable, and meaningful web solutions — one pixel at a time.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
          className="m-10 flex justify-center text-center button-wrapper"
        >
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="border-white/20 dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-6 py-3"
          >
            <span>Let&apos;s Build Together</span>
            <FaArrowRight className="text-md ml-2" />
          </HoverBorderGradient>
        </motion.div>
      </div>
      {/* generative text */}
      <section id="about" className="container mx-auto w-full mt-16 mt-0 mb-40">
        <h2 className="text-3xl md:text-4xl font-bold text-center mt-16 mb-10 text-white mb-20">
          About Us
        </h2>
        <div className=" text-center rounded-md flex flex-row items-center justify-center relative w-full">
          <div className="flex flex-col items-center justify-center w-1/2">
            <div className=" flex justify-center items-center h-[20rem] flex-col px-4">
              <p className="text-left text-neutral-500 dark:text-neutral-400 text-xl md:text-2xl mx-auto mb-10">
                We&apos;re a young and fearless web services crew on a mission to redefine how startups and small businesses experience the web. New in years but rich in curiosity , we fuel every project with creativity, fresh ideas, and commitment. With a blend of smart design, solid code, and attention to detail, we don&apos;t just build websites — we build trust, ⚡ momentum, and experiences that stick. Every line of code is a step toward better performance, bolder vision, and a more human web 🌐.
              </p>
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <CardSpotlight className="h-96 w-96">
              <div className="text-neutral-200 mt-4 relative z-20 flex items-center justify-center h-full">
               <h2>LOGO</h2>
              </div>
            </CardSpotlight>
          </div>
        </div>
      </section>

      {/* section three */}
      <section id="what-we-bring" className="container mx-auto w-full mt-16 mt-10 mb-30">
        <h2 className="text-3xl md:text-4xl font-bold text-center mt-16 mb-10 text-white">
          What We Bring to the Table
        </h2>

        <div className="container max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-4  mx-auto w-full">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-transparent min-h-[500px] lg:min-h-[300px] bg-black"
            className=""
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Fresh Perspective
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
                We may be new, but that means no rigid habits. We bring bold ideas, creative energy, and a learner’s mindset to every project.
              </p>
            </div>
            <Image
              src="/linear.webp"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
              unoptimized
            />
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-black">
            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Full-Stack Capability
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              From pixel-perfect designs to robust backend systems, we offer end-to-end solutions that scale with your business.
            </p>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] bg-black">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Startup-Friendly Approach
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                We understand fast-moving environments. Expect agile execution, transparent communication, and outcomes you can count on.
              </p>
            </div>
            <Image
              src="/linear.webp"
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
            />
          </WobbleCard>
        </div>
      </section>
      {/* section four  */}

      {/* <section className="mx-auto w-full">
      <LampDemo />
      <ShootingStars />
      <StarsBackground />
      </section> */}
      <section id="tech-stack" style={{ backgroundColor: "#0000" }} className="w-full flex items-center justify-center z-10 relative mb-30">
        <BackgroundGradientAnimation>
          <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-2xl text-center md:text-3xl lg:text-5xl">
            <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
              Building Tomorrows Web, Today
            </p>
          </div>
        </BackgroundGradientAnimation>
      </section>

      <section id="projects" className="projects-section container mx-auto w-full">
        <h2 className="text-center mb-5 text-3xl md:text-4xl font-bold mt-16 mb-2 text-white">Our Recent Projects</h2>
        <p className="text-center text-lg text-slate-400 mb-20">
          Our work speaks louder than words. Here are a few of our recent builds and explorations.
        </p>
        <div className="w-full flex items-start justify-center h-[30rem] ">
          <PinContainer
            title="Podcast Pro site"
            href="https://www.vwthemes.net/vw-podcast-pro/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Podcast Theme
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  Audio podcast wordpress theme.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" >
                <Image src="/best-podcast-wordpress-theme.webp" alt="Podcast Pro Theme" width={400} height={400} className="" />
              </div>
            </div>
          </PinContainer>
          <PinContainer
            title="Podcast Pro site"
            href="https://www.vwthemes.net/vw-podcast-pro/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Podcast Theme
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  Audio podcast wordpress theme.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" >
                <Image src="/best-podcast-wordpress-theme.webp" alt="Podcast Pro Theme" width={400} height={400} className="" />
              </div>
            </div>
          </PinContainer>
          <PinContainer
            title="Podcast Pro site"
            href="https://www.vwthemes.net/vw-podcast-pro/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Podcast Theme
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  Audio podcast wordpress theme.
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" >
                <Image src="/best-podcast-wordpress-theme.webp" alt="Podcast Pro Theme" width={400} height={400} className="" />
              </div>
            </div>
          </PinContainer>
        </div>
      </section>

      <section className="container mx-auto w-full my-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
          Our Tech Stack
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <LinkPreview url="https://nextjs.org/" className="flex flex-col items-center justify-center py-8 rounded-lg  hover:bg-neutral-800 transition">
            <SiNextdotjs className="text-6xl mb-2" />
          </LinkPreview>
          <LinkPreview url="https://react.dev/" className="flex flex-col items-center justify-center py-8 rounded-lg hover:bg-neutral-800 transition">
            <SiReact className="text-6xl text-cyan-400 mb-2" />
          </LinkPreview>
          <LinkPreview url="https://tailwindcss.com/" className="flex flex-col items-center justify-center py-8 rounded-lg hover:bg-neutral-800 transition">
            <SiTailwindcss className="text-6xl text-sky-400 mb-2" />
          </LinkPreview>
          <LinkPreview url="https://typescriptlang.org/" className="flex flex-col items-center justify-center py-8 rounded-lg hover:bg-neutral-800 transition">
            <SiTypescript className="text-6xl text-blue-500 mb-2" />
          </LinkPreview>
          <LinkPreview url="https://framer.com/motion/" className="flex flex-col items-center justify-center py-8 rounded-lg hover:bg-neutral-800 transition">
            <SiFramer className="text-6xl text-white mb-2" />
          </LinkPreview>
          <LinkPreview url="https://vercel.com/" className="flex flex-col items-center justify-center py-8 rounded-lg hover:bg-neutral-800 transition">
            <SiVercel className="text-6xl text-white mb-2" />
          </LinkPreview>
        </div>
      </section>
      <section id="contact" className="my-20 container mx-auto w-full">
        <ContactForm />
      </section>


      <footer className="relative w-full mt-20 overflow-hidden bg-gradient-to-b from-transparent to-black/95">
        {/* 3D Space Touch: Starfield and a stylized "horizon" */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Starfield effect */}
          <StarsBackground className="!absolute !inset-0 !w-full !h-full z-0 pointer-events-none" />
          {/* Horizon glow */}
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 z-10 w-[80vw] h-32 md:h-48 rounded-full bg-gradient-to-t from-blue-700/60 via-purple-700/40 to-transparent blur-2xl opacity-80" />
        </div>
        <div className="relative z-30 flex flex-col items-center justify-center py-20">
          <span className="text-lg md:text-2xl font-semibold text-neutral-200 text-center select-none drop-shadow-lg">
            © 2025 Proxima Cloud Solutions. Built with <span className="animate-pulse inline-block">❤️</span> and lots of coffee.
          </span>
        </div>
      </footer>
      <ShootingStars />
      <StarsBackground />
    </>

  );
}
