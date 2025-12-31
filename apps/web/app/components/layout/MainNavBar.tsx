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
      <nav className="max-w-7xl mx-auto px-3 sm:px-4 py-3 flex items-center justify-between gap-3">
        {/* LEFT – LOGO */}
        <GradientBorderGlass>
          <Link href="/" className="flex items-center gap-2 px-3 py-[6px]">
            <img src="/logo.svg" alt="Logo" className="w-5 h-5" />
            <span className="nav-pill text-[13px] md:text-[15px] font-medium">
              Logo
            </span>
          </Link>
        </GradientBorderGlass>

        {/* CENTER – MENU */}
        <GradientBorderGlass className="hidden sm:block">
          <div className="flex items-center gap-2 px-3 py-[6px]">
            {["Topics", "Pathways", "Resources", "Pricing", "Community"].map(
              (item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="nav-pill text-[13px] md:text-[15px] px-3 py-[6px]"
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </GradientBorderGlass>

        {/* RIGHT – AUTH */}
        <GradientBorderGlass>
          <div className="flex items-center gap-2 px-2 py-[6px]">
            <Link
              href="/login"
              className="nav-pill text-[13px] md:text-[15px] px-3 py-[6px]"
            >
              Log in
            </Link>

            <Link
              href="/signup"
              className="
                px-4
                py-[6px]
                rounded-full
                text-[13px] md:text-[15px]
                font-semibold
                text-white
                bg-gradient-to-r from-[#7a12fa] to-[#9b4dff]
                hover:from-[#6b0fe0] hover:to-[#8438ff]
                shadow-[0_4px_14px_rgba(122,18,250,0.35)]
                transition-all
                duration-200
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
/* PREMIUM GRADIENT WRAPPER */
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
        p-[1px]
        transition-all
        duration-200
        hover:-translate-y-[1px]
        hover:shadow-[0_8px_22px_rgba(0,0,0,0.08)]
        ${className}
      `}
      style={{
        background:
          "linear-gradient(90deg, rgba(122,18,250,0.35), rgba(155,77,255,0.35))",
      }}
    >
      <div
        className="rounded-full bg-white transition"
        style={{
          boxShadow: "0 0 0 1px rgba(0,0,0,0.04), 0 2px 6px rgba(0,0,0,0.03)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
