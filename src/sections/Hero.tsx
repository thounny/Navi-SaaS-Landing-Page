/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Button from "@/components/Button";
import designExample1Image from "@/assets/images/example1.gif";
import designExample2Image from "@/assets/images/example2.gif";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useRef } from "react";
import cursorYouImage from "@/assets/images/cursor-you.svg";

export default function Hero() {
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();
    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();

    const heroRef = useRef(null); // Reference for the hero section

    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);

        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: -100, x: -50 }, { duration: 0.5 }],
            [leftPointerScope.current, { x: 0, y: [-100, 0, 5] }, { duration: 0.5, ease: "easeInOut" }],
        ]);

        rightDesignAnimate([
            [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
            [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
        ]);

        rightPointerAnimate([
            [rightPointerScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
            [rightPointerScope.current, { x: 180, y: 0 }, { duration: 0.5 }],
            [rightPointerScope.current, { x: 0, y: [0, 10, 0] }, { duration: 0.5, ease: "easeInOut" }],
        ]);
    }, [leftDesignAnimate, leftPointerAnimate, rightDesignAnimate, rightPointerAnimate]);

    return (
        <section
            ref={heroRef} // Attach ref to the hero section
            className="py-24 overflow-x-clip"
            style={{
                cursor: `url(${cursorYouImage.src}), auto`,
            }}
        >
            <div className="container relative">
                {/* Left Design */}
                <motion.div
                    ref={leftDesignScope}
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    drag
                    dragConstraints={heroRef} // Constrain dragging within the hero section
                    className="absolute -left-32 top-16 hidden lg:block"
                >
                    <Image src={designExample1Image} draggable={false} alt="Design Example 1" />
                </motion.div>

                {/* Left Pointer */}
                <motion.div
                    ref={leftPointerScope}
                    initial={{ opacity: 0, y: 30, x: -200 }}
                    className="absolute left-50 top-72 hidden lg:block"
                >
                    <Pointer name="Lain" />
                </motion.div>

                {/* Right Design */}
                <motion.div
                    ref={rightDesignScope}
                    initial={{ opacity: 0, x: 100, y: 100 }}
                    drag
                    dragConstraints={heroRef} // Constrain dragging within the hero section
                    className="absolute -right-64 -top-16 hidden lg:block"
                >
                    <Image src={designExample2Image} alt="Design Example 2" draggable={false} />
                </motion.div>

                {/* Right Pointer */}
                <motion.div
                    initial={{ opacity: 0, x: 275, y: 100 }}
                    ref={rightPointerScope}
                    className="absolute right-20 -top-4 hidden lg:block"
                >
                    <Pointer
                        name=".̵̰̣̗̜͙̂̿̔͐̊̀̾̀́͘̕͘͝ͅ.̸̭̪̭̙̗̹͉̃.̶̗͍̻̊͗̒̉͑̊͑͆̚.̸̪͓̘͔̰͚̝̠͙̻̓ͅͅ.̴̧̞͙͈̩̖̤̻̭̰̘̙͇͇̪̓̑͆̒̚.̸̨̧̠̤̮̒̅͐́͊̂̄̏͛̌̍͝.̸̟̻͍͕͎̣͎̣̪̱̲̒͌́̄̓̓͌͒͌̓͌̓͝͠.̴̨̠̺̥̣͎̼̑̓͌̎̉̈́͘͝"
                        color="red"
                    />
                </motion.div>

                {/* Info Section */}
                <div className="flex justify-center">
                    <div
                        className="inline-flex items-center py-1 px-3 bg-gradient-to-r
                    from-red-400 to-red-600 rounded-full text-neutral-950 font-semibold"
                    >
                        <span>✨ 9.5M users connected</span>
                        <span className="ml-2 h-2 w-2 rounded-full bg-teal-500 animate-blink"></span>
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                    Access The Wired, Through <span className="text-red-500">Navi</span>
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    Navi is your gateway to The Wired—intuitive, powerful, and designed to adapt to you.
                </p>
                <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent px-4 md:flex-1 w-full"
                    />
                    <Button type="submit" variant="primary" className="whitespace-nowrap" size="sm">
                        Get started
                    </Button>
                </form>
            </div>
        </section>
    );
}
