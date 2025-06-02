import BaseContainer from "@/components/layout/container/base-container"
import { StackVertical } from "@/components/layout/layout-stack/layout-stack"
import { BlogCard } from "./_components/BlogCard"
import { BlogHeader } from "./_components/BlogHeader"
import { blogPosts } from "./_data/posts"
import { SectionFooter } from "@/components/layout/footer/SectionFooter"
import { Metadata } from "next"
import Text from "@/components/ui/text/text"
import Ruler from "@/components/ui/ruler/ruler"

export const metadata: Metadata = {
    title: 'Blog | sumit.ml',
    description: 'thoughts on machine learning, math, technology, and my journey',
}

export default function BlogListing() {
    return (
        <BaseContainer size="md" paddingX="md" paddingY="lg">
            <StackVertical gap="md">
                <BlogHeader />
                <Ruler color="colorless" marginTop="sm" marginBottom="none"/>
                <Text>
                    <i>Section under construction</i>
                </Text>
                {/* <StackVertical gap=§"none">
                    {blogPosts.map((post, index) => (
                        <BlogCard 
                            key={post.id} 
                            post={post} 
                            isLast={index === blogPosts.length - 1}
                        />
                    ))}
                </StackVertical> */}
            </StackVertical>
            <SectionFooter showToTop={false} />
        </BaseContainer>
    )
}