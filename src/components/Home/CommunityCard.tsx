"use client";


import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
export default function CommunityCard({ id }: { id?: string }) {
 const testimonials = [
   {
     quote:
       "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
     name: "Charles Dickens",
     title: "A Tale of Two Cities",
     avatar: "https://randomuser.me/api/portraits/men/32.jpg",
   },
   {
     quote:
       "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
     name: "William Shakespeare",
     title: "Hamlet",
     avatar: "https://randomuser.me/api/portraits/men/33.jpg",
   },
   {
     quote: "All that we see or seem is but a dream within a dream.",
     name: "Edgar Allan Poe",
     title: "A Dream Within a Dream",
     avatar: "https://randomuser.me/api/portraits/men/34.jpg",
   },
   {
     quote:
       "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
     name: "Jane Austen",
     title: "Pride and Prejudice",
     avatar: "https://randomuser.me/api/portraits/women/35.jpg",
   },
   {
     quote:
       "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
     name: "Herman Melville",
     title: "Moby-Dick",
     avatar: "https://randomuser.me/api/portraits/men/36.jpg",
   },
 ];

  return (
    <section id={id} className="py-12 bg-white dark:bg-black">
      <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        {/* Community comments heading */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-neutral-800 dark:text-gray-100">
            Our Community Comments
          </h2>
          <p className="text-neutral-500 dark:text-gray-400 text-base mt-2">
            See what our community is saying about us!
          </p>
        </div>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}
