'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { monoFont } from '@/styles/fonts/fonts'
import { cn } from '@/lib/utils/utils'
import TextHeading from '@/components/ui/text-heading/text-heading'
import Text from '@/components/ui/text/text'
import { StackVertical } from '@/components/layout/layout-stack/layout-stack'
import Link from 'next/link'
import Image from 'next/image'
import Ruler from '@/components/ui/ruler/ruler'
import { List, ListItem } from '@/components/ui/list/list'
import { ThemeAwareIcon } from '@/components/blocks/homepage/ThemeAwareIcon'

const useTypingEffect = (text: string, speed: number = 50) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)
      
      return () => clearTimeout(timeout)
    } else if (!isComplete) {
      setIsComplete(true)
    }
  }, [currentIndex, text, speed, isComplete])

  return { displayText, isComplete }
}

export function HeroSection() {
  const { displayText } = useTypingEffect('Pablo Almagro', 100)
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative pb-8"
        >
            <div className="relative">
                <StackVertical gap="xs">
                    <div className="flex items-baseline gap-1">
                        <div className="flex items-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex-shrink-0">
                            <ThemeAwareIcon 
                                lightIcon="/images/terminal_dark.svg"
                                darkIcon="/images/terminal_light.svg"
                                alt="Terminal icon"
                                width={30}
                                height={30}
                                withAnimation
                            />
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative flex items-center"
                        >
                            <TextHeading as="h1" className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-none">
                                {displayText}
                                <span className="animate-pulse">|</span>
                            </TextHeading>
                        </motion.div>
                    </div>

                    <Ruler color='colorless' marginTop='lg' marginBottom='none'/>
                    
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Text >
                            Hi! I am Pablo.
                        </Text>

                        <Ruler color='colorless' marginTop='lg' marginBottom='none'/>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Text>
                                I'm a Software developer based in Cadiz, Spain. I love machine learning, coffee, math, and among others. Glad to have you here!
                            </Text>
                            <Ruler color='colorless' marginTop='sm' marginBottom='none'/>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                                <Text>
                                   This is a place where I will leave my thoughts notes, and ideas.
                                </Text>

                                <Ruler color='colorless' marginTop='lg' marginBottom='none'/>

                                <Text>
                                    I ramble about things on my{' '}
                                    <Link href="/blog" className="text-blue-500 font-bold hover:underline">
                                        blog
                                    </Link>
                                    ; you can check it out if you're interested.
                                </Text>

                                {/* <Ruler color='colorless' marginTop='lg' marginBottom='none'/> */}

                                {/* <Text>
                                    Here are some reads I recommend from this site if you're interested:
                                </Text>

                                <Ruler color='colorless' marginTop='md' marginBottom='none'/>

                                <List spacing='tight'>
                                    <ListItem>
                                        <Link href="/about" className="underline hover:text-purple-500">My novice journey, a monologue</Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href="/blog/my-2025-resolution" className="underline hover:text-purple-500">My 2025 Resolution: Beyond the Roadmaps, Beyond the Timelines</Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link href="/blog/getting-started-with-machine-learning" className="underline hover:text-purple-500">
                                            Getting Started with Machine Learning
                                        </Link>
                                    </ListItem>
                                </List> */}

                                {/* <Ruler color='colorless' marginTop='lg' marginBottom='none'/> */}

                                {/* <Text>
                                    I also document my learnings through learning reflections every week. You can take a look at those{' '}
                                    <Link href="/learning/weekly-reflections" className="text-purple-500 font-bold hover:underline">
                                        here
                                    </Link>
                                    .
                                </Text> */}
                        </motion.div>
                    </motion.div>
                </StackVertical>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-8 -mb-8"
            >
                <div className="relative w-full aspect-[4/3] sm:aspect-[2/1] md:aspect-[21/9] rounded-lg overflow-hidden">
                    <Image
                        className="object-cover"
                        fill
                        src="/bolonia.jpg" 
                        alt="A photo of Bolonia, Tarifa, Spain."
                        priority
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
                    />
                </div>
            </motion.div>
        </motion.div>
    )
}
