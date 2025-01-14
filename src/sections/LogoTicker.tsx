"use client";
import { Fragment } from "react";
import amazonLogo from "@/assets/logos/amazon-256.png";
import appleLogo from "@/assets/logos/apple-256.png";
import canonLogo from "@/assets/logos/canon-256.png";
import cokeLogo from "@/assets/logos/coca-cola-256.png";
import discordLogo from "@/assets/logos/discord-256.png";
import paypalLogo from "@/assets/logos/paypal-2-256.png";
import sonyLogo from "@/assets/logos/sony-256.png";
import youtubeLogo from "@/assets/logos/youtube-3-256.png";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
    { name: "Amazon", image: amazonLogo },
    { name: "Apple", image: appleLogo },
    { name: "Canon", image: canonLogo },
    { name: "Coca-Cola", image: cokeLogo },
    { name: "Discord", image: discordLogo },
    { name: "PayPal", image: paypalLogo },
    { name: "Sony", image: sonyLogo },
    { name: "YouTube", image: youtubeLogo },
];

export default function LogoTicker() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container">
                <h3 className="text-center text-white/50 text-xl">
                    Market leaders that use Navi
                </h3>
                <div className=
                    "flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div
                        animate={{
                            x: "-50%",
                        }}
                        transition={{
                            duration: 30,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        className="flex flex-none gap-24 pr-24">
                        {Array.from({ length: 2 }).map((_, i) => (
                            <Fragment key={i}>
                                {logos.map((logo) => (
                                    <Image
                                        src={logo.image}
                                        key={logo.name}
                                        alt={logo.name}
                                        height={60}
                                    />
                                ))}
                            </Fragment>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
