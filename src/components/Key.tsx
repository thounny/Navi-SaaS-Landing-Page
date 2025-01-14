"use client"
import { HTMLAttributes, useState } from "react";
import { twMerge } from "tailwind-merge";

interface KeyProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "waveform" | "bubble" | "glitch"; // Added "glitch" variant
}

export default function Key(props: KeyProps) {
    const { className, children = "Listening...", variant = "glitch", ...otherProps } = props;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={twMerge(
                "relative flex items-center justify-center transition-all duration-300",
                variant === "bubble"
                    ? `px-4 py-2 bg-gradient-to-r from-teal-400 to-indigo-400 text-white rounded-full text-sm font-medium ${isHovered ? "animate-gradient" : ""
                    }`
                    : "",
                className
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            {...otherProps}
        >
            {variant === "bubble" && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
}
