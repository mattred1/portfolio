'use client'
import { TextLoop } from '@/components/ui/text-loop'

export function Header() {
  return (
    <header className="mb-8">
      <h1 className="font-display pb-2 text-5xl font-bold text-black dark:text-white">
        Matt Redinger
      </h1>
      <h2 className="font-display inline-flex pr-2 text-2xl font-bold text-black dark:text-white">
        Ask me about:
      </h2>
      <TextLoop
        interval={3}
        className="font-display inline-flex text-xl font-medium text-zinc-500"
      >
        <h2>frontend web development</h2>
        <h2>web design</h2>
        <h2>how to be a good team leader</h2>
        <h2>how to stay motivated to learn new things</h2>
        <h2>why you need a "how to work with me" document</h2>
        <h2>
          my favorite tabletop roleplaying game and why it's not Dungeons &amp;
          Dragons
        </h2>
        <h2>how to be the best cat parent</h2>
        <h2>the current WWE storyline</h2>
      </TextLoop>
    </header>
  )
}
