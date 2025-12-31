"use client";

import React from "react";
import Link from "next/link";

export default function MainNavbar() {
  return (
    <header
      className="w-full"
      style={{
        backgroundColor: "#f1f1f1",
        fontFamily: "jakarta-font",
      }}
    >
      <nav className="max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-2 flex items-center justify-between gap-2 sm:gap-3">
        {/* LEFT – LOGO */}
        <GradientBorderGlass>
          <Link
            href="/"
            className="flex items-center gap-2 px-2 py-1"
          >
            <img
              src="/logo.svg"
              alt="Logo"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
            <span className="nav-pill text-[15px] px-0">
              Logo
            </span>
          </Link>
        </GradientBorderGlass>

        {/* CENTER – MENU (Tablet + Desktop) */}
        <GradientBorderGlass className="hidden sm:block">
          <div className="flex items-center gap-1 md:gap-2 lg:gap-4 px-2 md:px-3 py-1">
            {["Topics", "Pathways", "Resources", "Pricing", "Community"].map(
              (item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="nav-pill text-[15px] px-2 py-1"
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </GradientBorderGlass>

        {/* RIGHT – AUTH */}
        <GradientBorderGlass>
          <div className="flex items-center gap-1 sm:gap-2 px-1 py-1">
            <Link
              href="/login"
              className="nav-pill text-[15px] px-2 py-1"
            >
              Log in
            </Link>

            <Link
              href="/signup"
              className="
                px-3
                py-1
                rounded-full
                text-[15px]
                font-semibold
                text-white
                bg-[#7a12fa]
                hover:bg-[#6a0ee0]
                transition
              "
            >
              Sign Up
            </Link>
          </div>
        </GradientBorderGlass>
      </nav>
    </header>
  );
}

/* ========================= */
/* GRADIENT BORDER WRAPPER */
/* ========================= */

function GradientBorderGlass({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
        group 
        rounded-full 
        p-[0.5px] 
        transition
        hover:bg-transparent
        ${className}
      `}
      style={{
        background: "linear-gradient(90deg, #c7c9ff, #d6c7ff)",
      }}
    >
      <div
        className="
          rounded-full 
          transition 
          group-hover:bg-white
        "
        style={{
          backgroundColor: "#f1f1f1",
          boxShadow: "inset 0 0 0 1px rgba(122,18,250,0.15)",
        }}
      >
        <div
          className="
            rounded-full 
            transition 
            group-hover:ring-1 
            group-hover:ring-[#7a12fa]/30
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
}
