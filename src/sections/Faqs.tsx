"use client"
import Tag from "@/components/Tag";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "How is Navi different from other tools?",
        answer: "Navi transcends traditional tools by acting as your portal to The Wired. Its adaptive interface merges speed and simplicity, keeping you immersed in your workflow while unlocking limitless possibilities.",
    },
    {
        question: "Is there a learning curve?",
        answer: "Navi is designed to feel intuitive from the moment you connect. Most users master it within hours, and interactive guides and holographic walkthroughs ensure you're never disconnected.",
    },
    {
        question: "How does Navi handle version control?",
        answer: "Navi preserves every change as a node within The Wired. You can access your full history, restore previous states, and create secure checkpoints for critical moments.",
    },
    {
        question: "Can I access The Wired offline?",
        answer: "Yes! Navi features an integrated offline mode. Your interactions seamlessly sync back to The Wired once you're reconnected, ensuring uninterrupted workflow continuity.",
    },
    {
        question: "How does Navi enable collaboration?",
        answer: "Navi redefines collaboration within The Wired. Invite others to your workspace, share live feedback, and co-create in real-time, no matter where you are in the network.",
    },
];

export default function Faqs() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>
                        FAQs
                    </Tag>
                </div>
                <h2
                    className=
                    "text-6xl font-medium mt-6 text-center">
                    Questions? We&apos;ve got <span className="text-teal-400">answers</span>.
                </h2>
                <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
                    {faqs.map((faq, faqIndex) => (
                        <div key={faq.question}
                            className="bg-neutral-900 border border-white/10 rounded-2xl p-6">
                            <div className="flex justify-between items-center" onClick={() => setSelectedIndex(faqIndex)}>
                                <h3 className="font-medium">{faq.question}</h3>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={twMerge("feather feather-plus text-teal-400 flex-shrink-0 transition duration-300", selectedIndex === faqIndex && "rotate-45")}
                                >
                                    <line x1="12" y1="5" x2="12" y2="19">
                                    </line>
                                    <line x1="5" y1="12" x2="19" y2="12">
                                    </line>
                                </svg>
                            </div>
                            <AnimatePresence>
                                {selectedIndex === faqIndex && (
                                    <motion.div
                                        initial={{
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        animate={{
                                            height: "auto",
                                            marginTop: 24,
                                        }}
                                        exit={{
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        className={twMerge("overflow-hidden")}>
                                        <p className="text-white/50">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}
