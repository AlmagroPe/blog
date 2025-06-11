'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils/utils'

interface ThemeAwareIconProps {
  lightIcon: string
  darkIcon: string
  alt: string
  width?: number
  height?: number
  className?: string
  withAnimation?: boolean
}

export function ThemeAwareIcon({
  lightIcon,
  darkIcon,
  alt,
  width = 30,
  height = 30,
  className = '',
  withAnimation = false
}: ThemeAwareIconProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Evita hidratación hasta que el componente esté montado en el cliente
  useEffect(() => {
    setMounted(true)
  }, [])


  // Muestra un div vacío hasta que el componente esté montado
  if (!mounted) {
    return <div style={{ width, height }} className={className} />
  }

  // Determina qué SVG mostrar según el tema
  const iconSrc = theme === 'dark' ? darkIcon : lightIcon

  const image = (
    <Image
      src={iconSrc}
      alt={alt}
      width={width}
      height={height}
      className={cn('object-contain', className)}
    />
  )

  if (!withAnimation) {
    return image
  }

  return (
    <div className="animate-float">
      {image}
    </div>
  )
}
