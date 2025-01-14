import Tag from "@/components/Tag";
import figmaIcon from "@/assets/images/figma-logo.svg";
import notionIcon from "@/assets/images/notion-logo.svg";
import slackIcon from "@/assets/images/slack-logo.svg";
import relumeIcon from "@/assets/images/relume-logo.svg";
import framerIcon from "@/assets/images/framer-logo.svg";
import githubIcon from "@/assets/images/github-logo.svg";
import IntegrationsColumn from "@/components/IntegrationsColumn";


const integrations = [
    { name: "Figma", icon: figmaIcon, description: "Figma acts as your portal to seamless collaborative design, connecting creators in The Wired." },
    { name: "Notion", icon: notionIcon, description: "Notion serves as a central hub in The Wired, organizing and managing your digital thoughts effortlessly." },
    { name: "Slack", icon: slackIcon, description: "Slack enables synchronized communication within The Wired, making teamwork instantaneous and efficient." },
    { name: "Relume", icon: relumeIcon, description: "Relume simplifies web creation, providing the tools to craft your own presence in The Wired." },
    { name: "Framer", icon: framerIcon, description: "Framer transforms concepts into reality, bridging creativity and functionality in The Wired." },
    { name: "GitHub", icon: githubIcon, description: "GitHub powers collaboration and innovation, bridging development and teamwork" },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
    return (
        <section className="py-24 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div>
                        <Tag>Integrations</Tag>
                        <h2 className="text-6xl font-medium mt-6">
                            Seamlessly Integrated with{" "} <span className="text-teal-400">The Wired</span>
                        </h2>
                        <p className="text-white/50 mt-4 text-lg">
                            Navi is engineered to connect effortlessly with the digital tools that power your workflow, creating a unified presence within The Wired.
                        </p>
                    </div>
                    <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                        <IntegrationsColumn integrations={integrations} />
                        <IntegrationsColumn
                            integrations={integrations.slice().reverse()}
                            reverse
                            className="hidden md:flex"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
