'use client'
import { TextLoop } from '@/components/ui/text-loop'
import Link from 'next/link'

export function Header() {
    return (
        <header className="mb-8">
            <h1 className="font-bold text-5xl font-display text-black dark:text-white">
                Matt Redinger
            </h1>
            <TextLoop
                interval={3}
                className="font-medium text-2xl font-display text-zinc-500">
                <h2>Frontend web developer</h2>
                <h2>Designer</h2>
                <h2>Team leader</h2>
                <h2>Lifelong learner</h2>
                <h2>TTRPG enthusiast</h2>
                <h2>Cat daddy</h2>
            </TextLoop>
        </header>
    )
}
