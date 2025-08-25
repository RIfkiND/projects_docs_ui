"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { CiSearch } from "react-icons/ci";
import { FaChevronDown, FaDiscord, FaGithub } from "react-icons/fa";
import { MdTranslate } from "react-icons/md";
// import { GoArrowUpRight } from "react-icons/go";
import {
  resourcesLinks,
  versionsLinks,
  languageOptions,
} from "@/components/Data/DataHeader";
import { IoClose } from "react-icons/io5";
export default function Header({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ctrl+K to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 border-b border-white/10",
        scrolled ? "backdrop-blur-md bg-black/30" : "bg-transparent",
        className
      )}
    >
      <div className="mx-auto max-w-screen-xl w-full px-6">
        <div
          className="flex items-center justify-between h-16"
          style={{ minHeight: "4rem" }}
        >
          {/* Logo OUTSIDE header-body */}
          <Link
            href="/"
            className="text-xl font-bold text-gray-200 h-full flex items-center mr-6"
          >
            Docs
          </Link>
          {/* Header Body */}
          <div
            className="flex items-center justify-between w-full h-full"
            id="header-body"
          >
            {/* Left: Search Button */}
            <div className="flex items-center gap-5">
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 px-4 py-1 rounded-lg bg-[#161618] text-gray-200 text-sm font-normal transition focus:outline-none min-w-[120px]"
                title="Search (Ctrl K)"
                type="button"
                style={{ height: "2.5rem" }}
              >
                <CiSearch className="text-base" />
                <span className="hidden sm:inline font-light">Search</span>
                <span className="ml-2 px-2 py-1 rounded bg-[#161618] text-[12px] font-mono border border-white/20 font-normal">
                  Ctrl K
                </span>
              </button>
            </div>
            {/* Right: Navigation + Socials */}
            <div className="flex items-center h-full ">
              <Menu setActive={setActive}>
                {/* Guide */}
                <Link
                  href="/guide"
                  className="flex items-center px-2 text-gray-200 text-sm hover:text-indigo-400 transition h-full"
                >
                  Guide
                </Link>
                {/* Config */}
                <Link
                  href="/config"
                  className="flex items-center px-2 text-gray-200 text-sm hover:text-indigo-400 transition h-full"
                >
                  Config
                </Link>
                {/* Resources Menu */}
                <MenuItem
                  setActive={setActive}
                  active={active}
                  value="resources"
                  item={
                    <span className="flex items-center px-2 text-gray-200 text-sm h-full">
                      Resources
                      <span className="flex items-center gap-1">
                        <FaChevronDown className="ml-1 text-[11px] align-middle" />
                      </span>
                    </span>
                  }
                >
                  <div className="flex flex-col space-y-4 text-xs font-bold">
                    {resourcesLinks.map((link) => (
                      <HoveredLink key={link.href} href={link.href}>
                        {link.label}
                      </HoveredLink>
                    ))}
                  </div>
                </MenuItem>
                {/* Version Menu */}
                <MenuItem
                  setActive={setActive}
                  active={active}
                  value="version"
                  item={
                    <span className="flex items-center px-2 text-gray-200 text-sm h-full">
                      <span className="hidden md:inline">Versions</span>
                      <span className="flex items-center gap-1">
                        <FaChevronDown className="ml-1 text-[11px] align-middle" />
                      </span>
                    </span>
                  }
                >
                  <div className="flex flex-col space-y-4 text-xs font-bold">
                    {versionsLinks.map((link, i) => (
                      <HoveredLink key={i} href={link.href}>
                        {link.label}
                      </HoveredLink>
                    ))}
                  </div>
                </MenuItem>
                {/* Translate Menu */}
                <MenuItem
                  setActive={setActive}
                  active={active}
                  value="translate"
                  item={
                    <span
                      className="flex items-center border-l border-r border-white/20 px-6 mx-2"
                      style={{ height: "1.5rem" }}
                    >
                      <MdTranslate className="text-[15px] mr-2" />
                      <FaChevronDown className="inline-block text-[8px] align-middle" />
                    </span>
                  }
                >
                  <div className="flex flex-col space-y-4 text-xs font-bold">
                    {languageOptions.map((lang) => (
                      <button key={lang.code} className="text-left rounded">
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </MenuItem>
                {/* Socials */}
                <a
                  href="https://discord.com/invite/your-discord"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-indigo-400 text-2xl ml-2 flex items-center h-full"
                  title="Discord"
                >
                  <FaDiscord />
                </a>
                <a
                  href="https://github.com/your-repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gray-200 text-2xl flex items-center h-full"
                  title="GitHub"
                >
                  <FaGithub />
                </a>
              </Menu>
            </div>
          </div>
        </div>
      </div>
      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 pt-16">
          <div className="bg-[#23232b]  rounded-sm shadow-2xl p-0 w-full max-w-3xl relative">
            <div className="flex flex-col">
              <div className="flex items-center px-3 pt-2 pb-2">
                <CiSearch className="text-indigo-300 text-3xl mr-2" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search docs"
                  className="flex-1 bg-transparent outline-none text-xl text-white font-light placeholder-gray-400 px-2 py-1"
                  style={{ minWidth: 0 }}
                />
                <button
                  className="ml-4 text-gray-400 hover:text-white text-2xl"
                  style={{ marginLeft: "auto" }}
                  onClick={() => setSearchOpen(false)}
                  aria-label="Close search"
                >
                  <IoClose />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
