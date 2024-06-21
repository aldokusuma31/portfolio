"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isHovered,setIsHovered] = useState(false);

    return (
        <header className="flex justify-between items-center px-2">
            <div className="flex items-center space-x-2">
                <Image 
                className="shadow-xl"
                src="/home.svg"
                alt="logo"
                width={30}
                height={30}
                priority
                />
                <span className="text-slate-900">by<span className="text-lg text-slate-900 font-bold">AKW</span></span>
            </div>
            <nav className="hidden md:flex md:pr-4 md:space-x-6 lg:space-x-10">
                <Link href="/about" className="text-slate-900 hover:text-primary-deep-blue">About</Link>
                <Link href="/portfolio" className=" text-slate-900 hover:text-primary-deep-blue">Portfolio</Link>
                <Link href="/contact" className=" text-slate-900 hover:text-primary-deep-blue">Contact</Link>
            </nav>
        </header>
    );
}