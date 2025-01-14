"use client";
import Tag from "@/components/Tag";
import { useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

const text = `You're striving to connect seamlessly to The Wired, but traditional tools and devices hold you back with outdated interfaces and cumbersome setups.`;
const words = text.split("");

export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start end", "end end"],
    });
    const [currentWord, setCurrentWord] = useState(0);
    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

    useEffect(() => {
        wordIndex.on("change", (latest) => {
            setCurrentWord(latest);
        });
    }, [wordIndex]);

    return (
        <section className="py-28 lg:py-40">
            <div className="container">
                <div className="sticky top-36 md:top-44 lg:top-40 flex flex-col items-center space-y-5">
                    {/* Introducing Navi Button */}
                    <div className="flex justify-center">
                        <Tag>Introducing Navi</Tag>
                    </div>
                    {/* Sliding Text */}
                    <div className="text-3xl md:text-5xl lg:text-7xl text-center font-medium mt-10">
                        <span>Your creative process deserves better.</span>{" "}
                        <span className="">
                            {words.map((word, wordIndex) => (
                                <span
                                    key={wordIndex}
                                    className={twMerge(
                                        "transition duration-500 text-white/15",
                                        wordIndex < currentWord && "text-white"
                                    )}
                                >
                                    {`${word}`}
                                </span>
                            ))}
                        </span>
                        <span className="text-teal-400 block">
                            That&apos;s why we built Navi.
                        </span>
                    </div>
                </div>
                <div className="h-[100vh]" ref={scrollTarget}></div>
            </div>
        </section>
    );
}
