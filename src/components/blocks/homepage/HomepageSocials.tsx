'use client'

import TextHeading from '@/components/ui/text-heading/text-heading'
import Text from '@/components/ui/text/text'
import Link from 'next/link'

export function HomepageSocials() {
    return (
        <div>
            <TextHeading as="h2" weight="bold">Socials</TextHeading>
            <Text>
                I’m always open to chat! Please feel free to ping me at <Link href="mailto:pabloalmagrope@gmail.com" className="text-blue-500 hover:underline">pabloalmagrope@gmail.com</Link> or <Link href="https://x.com/PabloAlmagroPe" className="text-blue-500 hover:underline">Twitter</Link> if you have any questions or just wanna talk.
            </Text>
        </div>

    )
} 