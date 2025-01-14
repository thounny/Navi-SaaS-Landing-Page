import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";
import avatar1 from "@/assets/images/171265.gif";
import avatar2 from "@/assets/images/171356.gif";
import avatar3 from "@/assets/images/171378.gif";
import avatar4 from "@/assets/images/H29B54.gif";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";
import naviGif from "@/assets/images/wei39-navi-chib1i-export.gif";
import gif from "@/assets/images/H29B54.gif";

const features = [
    "Voice-Activated Interface",
    "Augmented Reality Overlays",
    "Biometric Security",
    "Neural Interface Compatibility",
    "Virtual Proxy Access",
    "Adaptive Interface",
    "Persona Manager",
];

export default function Features() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
                    Where power meets <span className="text-teal-400">simplicity</span>
                </h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
                    <FeatureCard
                        title="Collaborate in The Wired"
                        description="Connect and collaborate with others in real time within The Wired, ensuring seamless and synchronized interactions."
                        className="md:col-span-2 col-span-2 lg:col-span-1 group"
                    >

                        <div className="aspect-video flex items-center justify-center">
                            <Avatar className="z-40">
                                <Image src={avatar1} alt="Avatar 1" className="rounded-full object-cover h-full w-full" />
                            </Avatar>
                            <Avatar className="-ml-6 border-indigo-500 z-30">
                                <Image src={avatar2} alt="Avatar 2" className="rounded-full object-cover h-full w-full" />
                            </Avatar>
                            <Avatar className="-ml-6 border-red-500 z-20">
                                <Image src={avatar3} alt="Avatar 3" className="rounded-full object-cover h-full w-full" />
                            </Avatar>
                            <Avatar className="-ml-6 border-transparent group-hover:border-yellow-500 transition">
                                <div className="h-full w-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative">
                                    <Image
                                        src={avatar4} alt="Avatar 4"
                                        className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition" />
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <span
                                            className="h-1.5 w-1.5 rounded-full bg-white inline-flex"
                                            key={i}>
                                        </span>
                                    ))}
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>
                    <FeatureCard
                        title="Seamless Wired Connectivity"
                        description="Navi bridges the gap between the physical and digital worlds, giving you instantaneous access to The Wired for communication, creation, and exploration."
                        className="md:col-span-2 col-span-2 lg:col-span-1 group"
                    >
                        <div className="relative aspect-video flex flex-col items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/20 group-hover:text-white/10 transition duration-500 text-center relative z-10">
                                <span>Experience</span>{" "}
                                <span
                                    className="bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent relative"
                                >
                                    true connection
                                </span>
                            </p>
                            {/* GIF Positioned in Between */}
                            <Image
                                src={gif}
                                alt="Incredible GIF"
                                className="absolute opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
                                style={{
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    maxWidth: "80%",
                                    height: "auto",
                                }}
                            />
                            <p className="text-4xl font-extrabold text-white/20 group-hover:text-white/10 transition duration-500 text-center relative z-10">
                                with technology.
                            </p>
                        </div>
                    </FeatureCard>





                    <FeatureCard
                        title="Voice-Activated Commands"
                        description="Control Navi and navigate The Wired using intuitive voice commands for a hands-free experience."
                        className="md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-auto"
                    >
                        <div className="aspect-video flex flex-col items-center justify-center gap-4">
                            <div className="w-48 h-48 rounded-md flex items-center justify-center">
                                <span className="text-xs text-neutral-400">
                                    <Image
                                        src={naviGif}
                                        alt="Navi GIF"
                                        width={256}
                                        height={256}
                                    />
                                </span>
                            </div>
                            <Key variant="bubble">Listening...</Key>
                        </div>
                    </FeatureCard>



                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                    {features.map(feature => (
                        <div key={feature} className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center text-xl hover:scale-105 transition duration-500 group">
                            <span className="bg-red-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center group-hover:rotate-45 transition duration-500">&#10038;</span>
                            <span className="font-medium md:text-lg">{feature}</span>
                        </div>
                    ))}
                </div>
            </div >
        </section >
    );
}
