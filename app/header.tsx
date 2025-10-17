'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
    return (
        <header className="mb-8 flex items-center justify-between">
            <div>
                <h1 className="font-medium text-4xl font-display text-black dark:text-white">
                    Matt Redinger
                </h1>
                <TextEffect
                    as="h2"
                    preset="fade"
                    per="char"
                    className="text-zinc-600 dark:text-zinc-500"
                    delay={0.75}
                >Front End Web Developer
                </TextEffect>
            </div>
        </header>
    )
}
