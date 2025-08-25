"use client";
import { motion } from "motion/react";
import Image from "next/image";
import React, { AnchorHTMLAttributes, ReactNode } from "react";

// const transition = {
//   duration: 0.4,
//   easing: "ease-in-out",
// };
const transition = {
  duration: 0.3,
  easing: "cubic-bezier(0.4, 0, 0.2, 1)",
};


export const MenuItem = ({
  setActive,
  active,
  value,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  value: string;
  item: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <div
      onMouseEnter={() => setActive(value)}
      className="relative h-full flex items-center"
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer hover:opacity-[0.9] text-white"
      >
        {item}
      </motion.p>
      {active === value && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 16 }}
          transition={transition}
          className="absolute top-full left-1/2 -mt-3 w-35 flex justify-center -translate-x-1/2 z-50"
        >
          <motion.div
            transition={transition}
            layoutId="active"
            className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden w-full shadow-lg"
          >
            <motion.div
              layout
              className="h-full p-4 flex flex-col items-center justify-center gap-y-4"
            >
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};


export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative flex justify-center items-stretch space-x-4 px-8 py-0 h-full"
      style={{ minHeight: "4rem" }}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && typeof child.type === "string") {
          // Use HTMLAttributes<HTMLElement> for intrinsic elements
          const el = child as React.ReactElement<
            React.HTMLAttributes<HTMLElement>
          >;
          return React.cloneElement(el, {
            className: [el.props.className, "h-full"].filter(Boolean).join(" "),
          });
        }
        return child;
      })}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />

      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode }) => {
  return (
    <a
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </a>
  );
};
