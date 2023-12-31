import React from 'react'
import  { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from 'next/link';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, my name is Mohamed Bouzidi !",
            "Man-who-loves-code.tsx",
            "<ButLovesToDrinkCoffeeToo />",
        ],
        loop: true,
        delaySpeed: 2000,
    });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden" >
        <BackgroundCircles />
        <img
            className="relative rounded-full h-32 w-32 mx-auto object-cover"
            src="https://i.ibb.co/2vqYKYG/saitama-avatar.png"
            alt=""
        />
        <div className="z-20">
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Front-End Developer</h2>
            <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
                <span className="mr-3">{text}</span>
                <Cursor cursorColor="#F7AB0A" />
            </h1>

            <div className="pt-5">

                <Link href="#about">
                    <button className="heroButton">About</button>
                </Link>
                <Link href="#experience">
                    <button className="heroButton">Experience</button>
                </Link>
                <Link href="#skills">
                    <button className="heroButton">Skills</button>
                </Link>
                <Link href="#projects">                
                    <button className="heroButton">Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}