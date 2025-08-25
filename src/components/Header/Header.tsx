"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { FaChevronDown, FaDiscord, FaGithub, FaSearch } from "react-icons/fa";
import { MdTranslate } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";

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
          {/* Header Body */}
          <div
            className="flex items-center justify-between w-full h-full"
            id="header-body"
          >
            {/* Left: Logo / Icon and Search Button */}
            <div className="flex items-center gap-5 h-full">
              <Link
                href="/"
                className="text-xl font-bold text-gray-200 h-full flex items-center"
              >
                Your Docs
              </Link>
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-3 px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-gray-200 border border-white/20 text-sm font-medium transition focus:outline-none h-full"
                title="Search (Ctrl+K)"
                type="button"
                style={{ minHeight: "2.5rem" }}
              >
                <FaSearch />
                <span className="hidden sm:inline text-xs">Search</span>
                <span className="ml-2 px-2 py-0.5 rounded bg-white/20 text-[11px] font-mono border border-white/20">
                  Ctrl+K
                </span>
              </button>
            </div>

            {/* Right: Navigation + Socials */}
            <div className="flex items-center h-full">
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
                  <div className="flex flex-col space-y-3 text-xs">
                    <HoveredLink href="/web-dev">Web</HoveredLink>
                    <HoveredLink href="/Blog">Blog</HoveredLink>
                    <HoveredLink href="/other">other</HoveredLink>
                    <HoveredLink href="/other">other</HoveredLink>
                  </div>
                </MenuItem>
                {/* Version Menu */}
                <MenuItem
                  setActive={setActive}
                  active={active}
                  value="version"
                  item={
                    <span className="flex items-center px-2 text-gray-200 text-sm h-full">
                      <span className="hidden md:inline">Version</span>
                      <span className="flex items-center gap-1">
                        <FaChevronDown className="ml-1 text-[11px] align-middle" />
                      </span>
                    </span>
                  }
                >
                  <div className="flex flex-col space-y-2 text-xs">
                    <HoveredLink href="#">
                      <span className="flex items-center gap-1">
                        Version 1.0.0
                        <GoArrowUpRight className="text-xs align-middle" />
                      </span>
                    </HoveredLink>
                  </div>
                </MenuItem>
                {/* Translate Menu */}
                <MenuItem
                  setActive={setActive}
                  active={active}
                  value="translate"
                  item={
                    <span className="flex items-center gap-1 border-l border-r border-white/20 px-2 text-gray-200 text-sm h-full">
                      <MdTranslate className="text-[15px]" />
                      <FaChevronDown className="inline-block text-[9px] align-middle" />
                    </span>
                  }
                >
                  <div className="flex flex-col space-y-2 text-xs">
                    <button className="text-left hover:bg-gray-100 px-2 py-1 rounded">
                      English
                    </button>
                    <button className="text-left hover:bg-gray-100 px-2 py-1 rounded">
                      Español
                    </button>
                    <button className="text-left hover:bg-gray-100 px-2 py-1 rounded">
                      Français
                    </button>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={() => setSearchOpen(false)}
              aria-label="Close search"
            >
              ×
            </button>
            <div className="flex items-center gap-2 border-b pb-2 mb-2">
              <FaSearch className="text-gray-400" />
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search..."
                className="flex-1 outline-none text-base bg-transparent"
              />
            </div>
            <div className="text-gray-400 text-xs">Press Ctrl+K to close</div>
          </div>
        </div>
      )}
    </header>
  );
}
