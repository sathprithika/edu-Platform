"use client";

import React from "react";
import Link from "next/link";

export default function MainNavbar() {
  return (
    <header
      className="w-full sticky top-0 z-50"
      style={{
        backgroundColor: "#f1f1f1",
        fontFamily: "jakarta-font",
      }}
    >

        {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none z-10 grain-texture"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      
      <nav className="max-w-7xl mx-auto px-3 sm:px-6 py-4 flex items-center justify-between gap-4 relative z-20">
        {/* LEFT – LOGO */}
        <GradientBorderGlass>
          <Link href="/" className="flex items-center gap-2.5 px-5 h-[46px]">
            <img src="/logo.svg" alt="Logo" className="w-6 h-6" />
            <span className="text-[15px] font-bold tracking-tight text-gray-900">
              Logo
            </span>
          </Link>
        </GradientBorderGlass>

        {/* CENTER – MENU */}
        <GradientBorderGlass className="hidden sm:block">
          <div className="flex items-center h-[46px] px-2 gap-0.5">
            {["Topics", "Pathways", "Resources", "Pricing", "Community"].map(
              (item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="relative text-[15px] font-semibold px-4 py-2 rounded-full text-gray-700 hover:text-gray-900 hover:bg-gradient-to-b hover:from-gray-50 hover:to-gray-100 transition-all duration-200 hover:shadow-sm"
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </GradientBorderGlass>

        {/* RIGHT – AUTH */}
        <GradientBorderGlass>
          <div className="flex items-center h-[46px] px-2 gap-1">
            <Link
              href="/login"
              className="text-[15px] font-semibold px-5 py-2 rounded-full text-gray-700 hover:text-gray-900 hover:bg-gradient-to-b hover:from-gray-50 hover:to-gray-100 transition-all duration-200 hover:shadow-sm"
            >
              Log in
            </Link>

            <Link
              href="/signup"
              className="
                relative
                overflow-hidden
                px-6
                py-2
                flex
                items-center
                justify-center
                rounded-full
                text-[15px]
                font-bold
                text-white
                bg-gradient-to-br from-[#7c3aed] via-[#8b5cf6] to-[#a78bfa]
                hover:from-[#6d28d9] hover:via-[#7c3aed] hover:to-[#8b5cf6]
                shadow-[0_4px_14px_rgba(124,58,237,0.4),inset_0_1px_0_rgba(255,255,255,0.3)]
                hover:shadow-[0_6px_20px_rgba(124,58,237,0.5),inset_0_1px_0_rgba(255,255,255,0.4)]
                transition-all
                duration-300
                hover:scale-[1.02]
                active:scale-[0.98]
                before:absolute
                before:inset-0
                before:rounded-full
                before:bg-gradient-to-br
                before:from-white/20
                before:to-transparent
                before:opacity-0
                hover:before:opacity-100
                before:transition-opacity
              "
            >
              <span className="relative z-10 drop-shadow-sm">Sign Up</span>
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
        relative
        rounded-full
        p-[1.5px]
        transition-all
        duration-300
        ${className}
      `}
      style={{
        background:
          "linear-gradient(135deg, rgba(139,92,246,0.3), rgba(168,85,247,0.35), rgba(124,58,237,0.3))",
        boxShadow: "0 2px 8px rgba(124,58,237,0.08), 0 1px 2px rgba(0,0,0,0.06)",
      }}
    >
      <div
        className="rounded-full bg-white transition-all duration-300"
        style={{
          boxShadow: "inset 0 1px 2px rgba(255,255,255,0.8), inset 0 -1px 1px rgba(0,0,0,0.02)",
        }}
      >
        {children}
      </div>
    </div>
  );
}