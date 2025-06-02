'use client'

import BaseContainer from "@/components/layout/container/base-container"
import { StackVertical } from "@/components/layout/layout-stack/layout-stack"
import TextHeading from "@/components/ui/text-heading/text-heading"
import { SectionFooter } from "@/components/layout/footer/SectionFooter"
import Text from "@/components/ui/text/text"
import { DynamicBreadcrumb } from "@/components/ui/primitives/breadcrumb"
import { ThemeToggle } from "@/components/ui/theme/theme-toggle"

export default function About() {
    return (
        <BaseContainer size="md" paddingX="md" paddingY="lg">
            <StackVertical gap="md">
                <div className="flex items-center justify-between">
                    <DynamicBreadcrumb 
                        items={[
                            { href: '/', label: 'Home', emoji: '⚙' },
                            { label: 'About' }
                        ]}
                    />
                    <ThemeToggle />
                </div>

                <div>
                <TextHeading as="h1" weight="bold">
                    About Me
                </TextHeading>
					<Text variant="muted" size="xs" className="mb-8">January 14, 2025</Text>
                <StackVertical gap="md">
                    <Text>
                    I’ve been passionate about computers and robotics since I was a kid. My curiosity for how intelligent systems work started back in university, where I was first introduced to Artificial Intelligence. Over the years, I’ve continued to build on that early interest by learning, experimenting, and gradually expanding my knowledge in the field.
                    </Text>

                    <Text>
                    I’m a Computer Engineer with a strong passion for AI, which recently led me to complete a specialized Master’s degree with the goal of pivoting my career toward a field that truly motivates me. Throughout the program, I gained a solid foundation in Machine Learning, Natural Language Processing, and Generative Models — and it became clear that I want to dedicate my career to solving real-world problems through these technologies.
                    </Text>
                    <Text>
                        Professionally, I’ve worked as an Android Developer in both startups and tech companies. In recent years, I’ve been part of platform teams focused on process optimization, mobile architecture, and engineering efficiency.
                    </Text>
                    <Text>
                        I enjoy tackling complex problems, researching solutions, and learning throughout the process. Now, I’m determined to apply that same mindset to continue developing as a professional in the AI space.
                        
                    </Text>
                    <Text>
                        I'm a methodical and curious person with a strong commitment to development best practices. Throughout my career, I’ve embraced principles like SOLID, Clean Architecture, and TDD — always striving to deliver clean, maintainable, and efficient code.
                    </Text>
                    <Text>
                        I also love to automate, measure, and improve. Recently, I worked on a personal project using generative AI tools such as LangChain, where I developed a system capable of estimating the risk and feasibility of construction budgets based on data from public tenders. The system analyzed inputs, generated visual insights, and automatically delivered a complete PDF report. This experience deepened my understanding of conversational AI flows, LLM integration, and automated content generation for decision-making support.
                    </Text>
                </StackVertical>
            </div>
            </StackVertical>
            <SectionFooter color="blue" />
        </BaseContainer>
    )
}

