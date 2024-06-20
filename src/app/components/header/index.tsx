"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isHovered,setIsHovered] = useState(false);

    return (
        <header className="flex justify-between items-center px-2">
            <div className="flex items-center space-x-2">
                <span>By</span>
                <span className="text-lg font-bold">AKW</span>
            </div>
            <nav className="hidden md:flex md:pr-4 md:space-x-6 lg:space-x-10">
                <Link href="/about" className="hover:text-primary-deep-blue">About</Link>
                <Link href="/about" className="hover:text-primary-deep-blue">Portfolio</Link>
                <Link href="/about" className="hover:text-primary-deep-blue">Contact</Link>
            </nav>
        </header>
    );
}