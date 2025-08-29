"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is this project?",
    answer:
      "This project is a documentation UI built with Next.js, Tailwind CSS, and shadcn/ui components.",
  },
  {
    question: "How do I get started?",
    answer:
      "Check out the Getting Started section for quick setup instructions.",
  },
  {
    question: "Where can I find the API reference?",
    answer:
      "The API Reference is available in the Docs navigation or via the API link above.",
  },
  {
    question: "Is this open source?",
    answer: "Yes! You can find the source code on our GitHub repository.",
  },
  {
    question: "How can I contribute?",
    answer:
      "Feel free to open issues or pull requests on GitHub. Contributions are welcome!",
  },
];

export default function Faq({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="py-12 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center text-black dark:text-white">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
  