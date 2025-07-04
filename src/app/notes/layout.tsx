import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'My Notes | Pablo Almagro',
    description: 'A collection of references and notes from my learning journey',
    openGraph: {
        title: 'My Notes | Pablo Almagro',
        description: 'A collection of references and notes from my learning journey',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'My Notes | Pablo Almagro',
        description: 'A collection of references and notes from my learning journey',
    }
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 