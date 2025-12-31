// "use client";

// import React from "react";
// import Link from "next/link";

// export default function MainNavbar() {
//   return (
//     <header
//       className="w-full sticky top-0 z-50 jakarta-font"
//       style={{
//         backgroundColor: "#f1f1f1",
//       }}
//     >

//         {/* Grain texture */}
//       <div
//         className="absolute inset-0 pointer-events-none z-10 grain-texture"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
//         }}
//       />

//       {/* Animated gradient background */}
//       <div
//         className="absolute inset-0 pointer-events-none z-0"
//         style={{
//           background:
//             "radial-gradient(circle at 20% 50%, rgba(139,92,246,0.03), transparent 50%), radial-gradient(circle at 80% 50%, rgba(168,85,247,0.03), transparent 50%)",
//         }}
//       />

//       {/* Grain texture with enhanced opacity control */}
//       <div
//         className="absolute inset-0 pointer-events-none z-10 grain-texture"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.35'/%3E%3C/svg%3E")`,
//           mixBlendMode: "overlay",
//         }}
//       />

//       {/* Subtle top border shimmer */}
//       <div
//         className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none z-20"
//         style={{
//           background:
//             "linear-gradient(90deg, transparent, rgba(139,92,246,0.2) 20%, rgba(168,85,247,0.3) 50%, rgba(139,92,246,0.2) 80%, transparent)",
//         }}
//       />

//       <nav className="max-w-7xl mx-auto px-3 sm:px-6 py-4 relative z-20">
//         {/* Desktop Layout */}
//         <div className="hidden lg:flex items-center justify-between gap-4">
//           {/* LEFT – LOGO */}
//           <PremiumGradientBorder>
//             <Link href="/" className="flex items-center gap-2.5 px-5 h-[48px] group">
//               <div className="relative w-7 h-7 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
//                 <img
//                   src="/logo.svg"
//                   alt="Logo"
//                   className="w-full h-full drop-shadow-sm"
//                 />
//               </div>
//               <span className="text-[15px] font-bold tracking-tight text-gray-900 transition-all duration-300 group-hover:text-purple-700">
//                 Logo
//               </span>
//             </Link>
//           </PremiumGradientBorder>

//           {/* CENTER – MENU */}
//           <PremiumGradientBorder>
//             <div className="flex items-center h-[48px] px-2 gap-0.5">
//               {["Topics", "Pathways", "Resources", "Pricing", "Community"].map(
//                 (item, index) => (
//                   <Link
//                     key={item}
//                     href={`/${item.toLowerCase()}`}
//                     className="nav-link relative text-[15px] font-semibold px-4 py-2.5 rounded-full text-gray-700 transition-all duration-300 group overflow-hidden"
//                     style={{
//                       animationDelay: `${index * 50}ms`,
//                     }}
//                   >
//                     {/* Hover gradient background */}
//                     <span className="absolute inset-0 bg-gradient-to-br from-purple-50 via-violet-50 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

//                     {/* Shimmer effect on hover */}
//                     <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                       <span
//                         className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
//                         style={{
//                           transform: "translateX(-100%)",
//                           animation: "shimmer 1.5s ease-in-out",
//                         }}
//                       />
//                     </span>

//                     <span className="relative z-10 group-hover:text-purple-900 transition-colors duration-300">
//                       {item}
//                     </span>
//                   </Link>
//                 )
//               )}
//             </div>
//           </PremiumGradientBorder>

//           {/* RIGHT – AUTH */}
//           <PremiumGradientBorder>
//             <div className="flex items-center h-[48px] px-2 gap-1.5">
//               <Link
//                 href="/login"
//                 className="relative text-[15px] font-semibold px-5 py-2.5 rounded-full text-gray-700 transition-all duration-300 group overflow-hidden"
//               >
//                 <span className="absolute inset-0 bg-gradient-to-br from-purple-50 via-violet-50 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
//                 <span className="relative z-10 group-hover:text-purple-900 transition-colors duration-300">
//                   Log in
//                 </span>
//               </Link>

//               <Link
//                 href="/signup"
//                 className="
//                   group
//                   relative
//                   overflow-hidden
//                   px-6
//                   py-2.5
//                   flex
//                   items-center
//                   justify-center
//                   rounded-full
//                   text-[15px]
//                   font-bold
//                   text-white
//                   bg-gradient-to-br from-[#7c3aed] via-[#8b5cf6] to-[#a78bfa]
//                   shadow-[0_6px_20px_rgba(124,58,237,0.35),inset_0_1px_2px_rgba(255,255,255,0.3),inset_0_-1px_1px_rgba(0,0,0,0.1)]
//                   transition-all
//                   duration-400
//                   hover:shadow-[0_8px_30px_rgba(124,58,237,0.5),inset_0_1px_2px_rgba(255,255,255,0.4),inset_0_-1px_1px_rgba(0,0,0,0.1)]
//                   hover:scale-[1.03]
//                   active:scale-[0.98]
//                   active:shadow-[0_4px_12px_rgba(124,58,237,0.4),inset_0_1px_2px_rgba(255,255,255,0.2)]
//                 "
//               >
//                 {/* Animated gradient overlay */}
//                 <span
//                   className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"
//                   style={{
//                     backgroundSize: "200% 200%",
//                     animation: "gradientShift 3s ease infinite",
//                   }}
//                 />

//                 {/* Shine effect */}
//                 <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
//                   <span
//                     className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
//                     style={{
//                       transform: "translateX(-100%) skewX(-15deg)",
//                       animation: "shine 1.2s ease-out",
//                     }}
//                   />
//                 </span>

//                 <span className="relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
//                   Sign Up
//                 </span>
//               </Link>
//             </div>
//           </PremiumGradientBorder>
//         </div>

//         {/* Tablet Layout */}
//         <div className="hidden sm:flex lg:hidden items-center justify-between gap-3">
//           {/* LEFT – LOGO */}
//           <PremiumGradientBorder>
//             <Link href="/" className="flex items-center gap-2.5 px-4 h-[46px] group">
//               <div className="relative w-6 h-6 transition-transform duration-300 group-hover:scale-110">
//                 <img src="/logo.svg" alt="Logo" className="w-full h-full" />
//               </div>
//               <span className="text-[15px] font-bold tracking-tight text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
//                 Logo
//               </span>
//             </Link>
//           </PremiumGradientBorder>

//           {/* CENTER – MENU (Compact) */}
//           <PremiumGradientBorder>
//             <div className="flex items-center h-[46px] px-2 gap-0.5">
//               {["Topics", "Pathways", "Resources", "Pricing", "Community"].map(
//                 (item) => (
//                   <Link
//                     key={item}
//                     href={`/${item.toLowerCase()}`}
//                     className="relative text-[13px] font-semibold px-2.5 py-2 rounded-full text-gray-700 transition-all duration-300 group overflow-hidden"
//                   >
//                     <span className="absolute inset-0 bg-gradient-to-br from-purple-50 to-violet-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
//                     <span className="relative z-10 group-hover:text-purple-900 transition-colors duration-300">
//                       {item}
//                     </span>
//                   </Link>
//                 )
//               )}
//             </div>
//           </PremiumGradientBorder>

//           {/* RIGHT – AUTH */}
//           <PremiumGradientBorder>
//             <div className="flex items-center h-[46px] px-1.5 gap-1">
//               <Link
//                 href="/login"
//                 className="relative text-[14px] font-semibold px-3.5 py-2 rounded-full text-gray-700 transition-all duration-300 group overflow-hidden whitespace-nowrap"
//               >
//                 <span className="absolute inset-0 bg-gradient-to-br from-purple-50 to-violet-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
//                 <span className="relative z-10 group-hover:text-purple-900 transition-colors duration-300">
//                   Log in
//                 </span>
//               </Link>

//               <Link
//                 href="/signup"
//                 className="
//                   group
//                   relative
//                   overflow-hidden
//                   px-4
//                   py-2
//                   flex
//                   items-center
//                   justify-center
//                   rounded-full
//                   text-[14px]
//                   font-bold
//                   text-white
//                   whitespace-nowrap
//                   bg-gradient-to-br from-[#7c3aed] via-[#8b5cf6] to-[#a78bfa]
//                   shadow-[0_4px_14px_rgba(124,58,237,0.4),inset_0_1px_0_rgba(255,255,255,0.3)]
//                   transition-all
//                   duration-300
//                   hover:shadow-[0_6px_20px_rgba(124,58,237,0.5)]
//                   hover:scale-[1.02]
//                   active:scale-[0.98]
//                 "
//               >
//                 <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 <span className="relative z-10 drop-shadow-sm">Sign Up</span>
//               </Link>
//             </div>
//           </PremiumGradientBorder>
//         </div>

//         {/* Mobile Layout */}
//         <div className="flex sm:hidden items-center justify-between gap-3">
//           {/* LEFT – LOGO */}
//           <PremiumGradientBorder>
//             <Link href="/" className="flex items-center gap-2 px-4 h-[44px] group">
//               <div className="relative w-5 h-5">
//                 <img src="/logo.svg" alt="Logo" className="w-full h-full" />
//               </div>
//               <span className="text-[14px] font-bold tracking-tight text-gray-900">
//                 Logo
//               </span>
//             </Link>
//           </PremiumGradientBorder>

//           {/* RIGHT – AUTH */}
//           <PremiumGradientBorder>
//             <div className="flex items-center h-[44px] px-1.5 gap-1">
//               <Link
//                 href="/login"
//                 className="text-[13px] font-semibold px-3 py-2 rounded-full text-gray-700 hover:text-purple-900 hover:bg-purple-50 transition-all duration-200"
//               >
//                 Log in
//               </Link>

//               <Link
//                 href="/signup"
//                 className="
//                   relative
//                   overflow-hidden
//                   px-4
//                   py-2
//                   flex
//                   items-center
//                   justify-center
//                   rounded-full
//                   text-[13px]
//                   font-bold
//                   text-white
//                   whitespace-nowrap
//                   bg-gradient-to-br from-[#7c3aed] via-[#8b5cf6] to-[#a78bfa]
//                   shadow-[0_4px_14px_rgba(124,58,237,0.4),inset_0_1px_0_rgba(255,255,255,0.3)]
//                   transition-all
//                   duration-300
//                   active:scale-[0.96]
//                 "
//               >
//                 <span className="relative z-10 drop-shadow-sm">Sign Up</span>
//               </Link>
//             </div>
//           </PremiumGradientBorder>
//         </div>
//       </nav>
//     </header>
//   );
// }

// /* ========================= */
// /* PREMIUM GRADIENT WRAPPER */
// /* ========================= */

// function PremiumGradientBorder({
//   children,
//   className = "",
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) {
//   return (
//     <div
//       className={`
//         premium-border
//         group/border
//         relative
//         rounded-full
//         p-[1.5px]
//         transition-all
//         duration-500
//         ${className}
//       `}
//       style={{
//         background:
//           "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(168,85,247,0.3), rgba(124,58,237,0.25), rgba(147,51,234,0.2))",
//         boxShadow:
//           "0 2px 12px rgba(124,58,237,0.08), 0 1px 3px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,0.1)",
//       }}
//     >
//       {/* Inner glow effect */}
//       <div
//         className="absolute inset-0 rounded-full opacity-0 group-hover/border:opacity-100 transition-opacity duration-500 pointer-events-none"
//         style={{
//           background:
//             "linear-gradient(135deg, rgba(139,92,246,0.4), rgba(168,85,247,0.45), rgba(124,58,237,0.4))",
//           filter: "blur(1px)",
//         }}
//       />

//       {/* Main content container */}
//       <div
//         className="rounded-full bg-white/95 backdrop-blur-sm transition-all duration-500 group-hover/border:bg-white relative z-10"
//         style={{
//           boxShadow:
//             "inset 0 1px 2px rgba(255,255,255,0.9), inset 0 -1px 2px rgba(0,0,0,0.03)",
//         }}
//       >
//         {children}
//       </div>
//     </div>
//   );
// }

// /* ========================= */
// /* KEYFRAME ANIMATIONS */
// /* ========================= */

// const styles = `
// @keyframes shimmer {
//   0% {
//     transform: translateX(-100%);
//   }
//   100% {
//     transform: translateX(200%);
//   }
// }

// @keyframes shine {
//   0% {
//     transform: translateX(-100%) skewX(-15deg);
//   }
//   100% {
//     transform: translateX(200%) skewX(-15deg);
//   }
// }

// @keyframes gradientShift {
//   0%, 100% {
//     background-position: 0% 50%;
//   }
//   50% {
//     background-position: 100% 50%;
//   }
// }

// /* Fade in animation for nav items */
// @keyframes fadeInUp {
//   from {
//     opacity: 0;
//     transform: translateY(10px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }

// .nav-link {
//   animation: fadeInUp 0.5s ease-out backwards;
// }

// /* Enhanced premium border pulse */
// .premium-border::before {
//   content: '';
//   position: absolute;
//   inset: -2px;
//   border-radius: 9999px;
//   background: linear-gradient(135deg, rgba(139,92,246,0.3), rgba(168,85,247,0.35), rgba(124,58,237,0.3));
//   opacity: 0;
//   transition: opacity 0.5s ease;
//   z-index: -1;
//   filter: blur(4px);
// }

// .premium-border:hover::before {
//   opacity: 1;
// }
// `;

// // Inject styles
// if (typeof document !== "undefined") {
//   const styleSheet = document.createElement("style");
//   styleSheet.textContent = styles;
//   document.head.appendChild(styleSheet);
// }

"use client";

import React from "react";
import Link from "next/link";

export default function MainNavbar() {
  return (
    <header
      className="w-full sticky top-0 z-50 jakarta-font"
      style={{
        backgroundColor: "#f1f1f1",
      }}
    >
      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none z-10 grain-texture"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Premium gradient accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none z-20"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(139,92,246,0.5) 15%, rgba(168,85,247,0.6) 50%, rgba(139,92,246,0.5) 85%, transparent)",
        }}
      />

      <nav className="max-w-7xl mx-auto px-3 sm:px-6 py-4 relative z-20">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between gap-4">
          {/* LEFT – LOGO */}
          <CrystalClearBorder>
            <Link
              href="/"
              className="flex items-center gap-2.5 px-5 h-[50px] group"
            >
              <div className="relative w-7 h-7 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <img
                  src="/logo.svg"
                  alt="Logo"
                  className="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.12)]"
                />
              </div>
              <span className="text-[15.5px] font-medium tracking-tight text-gray-950 transition-all duration-300 group-hover:text-purple-700 drop-shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                Logo
              </span>
            </Link>
          </CrystalClearBorder>

          {/* CENTER – MENU */}
          <CrystalClearBorder>
            <div className="flex items-center h-[50px] px-2.5 gap-1">
              {["Topics", "Pathways", "Resources", "Pricing", "Community"].map(
                (item, index) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="nav-link relative text-[15px] font-medium px-4 py-2.5 rounded-full text-gray-800 transition-all duration-300 group overflow-hidden"
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    {/* High-contrast hover background */}
                    <span className="absolute inset-0 bg-gradient-to-br from-purple-100/90 via-violet-100/90 to-purple-100/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full shadow-sm" />

                    {/* Crisp shimmer effect */}
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                        style={{
                          transform: "translateX(-100%)",
                          animation: "shimmer 1.5s ease-in-out",
                        }}
                      />
                    </span>

                    {/* Sharp border on active/hover */}
                    <span className="absolute inset-0 rounded-full border border-purple-200/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <span className="relative z-10 group-hover:text-purple-950 transition-colors duration-300 drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">
                      {item}
                    </span>
                  </Link>
                )
              )}
            </div>
          </CrystalClearBorder>

          {/* RIGHT – AUTH */}
          <CrystalClearBorder>
            <div className="flex items-center h-[50px] px-2.5 gap-2">
              <Link
                href="/login"
                className="relative text-[15px] font-medium px-5 py-2.5 rounded-full text-gray-800 transition-all duration-300 group overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-purple-100/90 via-violet-100/90 to-purple-100/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full shadow-sm" />
                <span className="absolute inset-0 rounded-full border border-purple-200/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 group-hover:text-purple-950 transition-colors duration-300">
                  Log in
                </span>
              </Link>

              <Link
                href="/signup"
                className="
                  group
                  relative
                  overflow-hidden
                  px-7
                  py-2.5
                  flex
                  items-center
                  justify-center
                  rounded-full
                  text-[15px]
                  font-medium
                  text-white
                  bg-gradient-to-br from-[#7c3aed] via-[#8b5cf6] to-[#9333ea]
                  shadow-[0_8px_24px_rgba(124,58,237,0.45),0_2px_8px_rgba(124,58,237,0.3),inset_0_2px_4px_rgba(255,255,255,0.35),inset_0_-2px_4px_rgba(0,0,0,0.2)]
                  transition-all
                  duration-400
                  hover:shadow-[0_12px_32px_rgba(124,58,237,0.6),0_4px_12px_rgba(124,58,237,0.4),inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(0,0,0,0.2)]
                  hover:scale-[1.04]
                  active:scale-[0.98]
                  active:shadow-[0_4px_12px_rgba(124,58,237,0.4),inset_0_1px_2px_rgba(255,255,255,0.2)]
                  border border-purple-500/30
                "
              >
                {/* Enhanced gradient overlay */}
                <span
                  className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{
                    backgroundSize: "200% 200%",
                    animation: "gradientShift 3s ease infinite",
                  }}
                />

                {/* Crisp shine effect */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full"
                    style={{
                      transform: "translateX(-100%) skewX(-15deg)",
                      animation: "shine 1.2s ease-out",
                    }}
                  />
                </span>

                {/* Inner border for depth */}
                <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20" />

                <span className="relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] tracking-wide">
                  Sign Up
                </span>
              </Link>
            </div>
          </CrystalClearBorder>
        </div>

        {/* Tablet Layout */}
        <div className="hidden sm:flex lg:hidden items-center justify-between gap-3">
          {/* LEFT – LOGO */}
          <CrystalClearBorder>
            <Link
              href="/"
              className="flex items-center gap-2.5 px-4 h-[48px] group"
            >
              <div className="relative w-6 h-6 transition-transform duration-300 group-hover:scale-110">
                <img
                  src="/logo.svg"
                  alt="Logo"
                  className="w-full h-full drop-shadow-md"
                />
              </div>
              <span className="text-[15px] font-medium tracking-tight text-gray-950 group-hover:text-purple-700 transition-colors duration-300">
                Logo
              </span>
            </Link>
          </CrystalClearBorder>

          {/* CENTER – MENU (Compact) */}
          <CrystalClearBorder>
            <div className="flex items-center h-[48px] px-2 gap-0.5">
              {["Topics", "Pathways", "Resources", "Pricing", "Community"].map(
                (item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="relative text-[13.5px] font-medium px-2.5 py-2 rounded-full text-gray-800 transition-all duration-300 group overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-br from-purple-100/90 to-violet-100/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full shadow-sm" />
                    <span className="absolute inset-0 rounded-full border border-purple-200/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 group-hover:text-purple-950 transition-colors duration-300">
                      {item}
                    </span>
                  </Link>
                )
              )}
            </div>
          </CrystalClearBorder>

          {/* RIGHT – AUTH */}
          <CrystalClearBorder>
            <div className="flex items-center h-[48px] px-2 gap-1.5">
              <Link
                href="/login"
                className="relative text-[14px] font-medium px-4 py-2 rounded-full text-gray-800 transition-all duration-300 group overflow-hidden whitespace-nowrap"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-purple-100/90 to-violet-100/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full shadow-sm" />
                <span className="relative z-10 group-hover:text-purple-950 transition-colors duration-300">
                  Log in
                </span>
              </Link>

              <Link
                href="/signup"
                className="
                  group
                  relative
                  overflow-hidden
                  px-5
                  py-2
                  flex
                  items-center
                  justify-center
                  rounded-full
                  text-[14px]
                  font-medium
                  text-white
                  whitespace-nowrap
                  bg-gradient-to-br from-[#7c3aed] via-[#8b5cf6] to-[#9333ea]
                  shadow-[0_6px_20px_rgba(124,58,237,0.5),inset_0_1px_2px_rgba(255,255,255,0.35)]
                  transition-all
                  duration-300
                  hover:shadow-[0_8px_28px_rgba(124,58,237,0.6)]
                  hover:scale-[1.03]
                  active:scale-[0.98]
                  border border-purple-500/30
                "
              >
                <span className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 drop-shadow-md">Sign Up</span>
              </Link>
            </div>
          </CrystalClearBorder>
        </div>

        {/* Mobile Layout */}
        <div className="flex sm:hidden items-center justify-between gap-3">
          {/* LEFT – LOGO */}
          <CrystalClearBorder>
            <Link href="/" className="flex items-center gap-2 px-4 h-[46px]">
              <img
                src="/logo.svg"
                alt="Logo"
                className="w-5 h-5 drop-shadow-md"
              />
              <span className="text-[14px] font-medium tracking-tight text-gray-950">
                Logo
              </span>
            </Link>
          </CrystalClearBorder>

          {/* RIGHT – AUTH */}
          <CrystalClearBorder>
            <div className="flex items-center h-[46px] px-2 gap-1.5">
              <Link
                href="/login"
                className="text-[13.5px] font-medium px-3 py-2 rounded-full text-gray-800 hover:text-purple-950 hover:bg-purple-100/90 transition-all duration-200"
              >
                Log in
              </Link>

              <Link
                href="/signup"
                className="
                  relative
                  overflow-hidden
                  px-4
                  py-2
                  flex
                  items-center
                  justify-center
                  rounded-full
                  text-[13.5px]
                  font-medium
                  text-white
                  whitespace-nowrap
                  bg-gradient-to-br from-[#7c3aed] via-[#8b5cf6] to-[#9333ea]
                  shadow-[0_6px_20px_rgba(124,58,237,0.5),inset_0_1px_2px_rgba(255,255,255,0.3)]
                  transition-all
                  duration-300
                  active:scale-[0.96]
                  border border-purple-500/30
                "
              >
                <span className="relative z-10 drop-shadow-md">Sign Up</span>
              </Link>
            </div>
          </CrystalClearBorder>
        </div>
      </nav>
    </header>
  );
}

/* ================================= */
/* CRYSTAL CLEAR BORDER WRAPPER     */
/* ================================= */

function CrystalClearBorder({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
        crystal-border
        group/border
        relative
        rounded-full
        p-[2px]
        transition-all
        duration-500
        ${className}
      `}
      style={{
        background:
          "linear-gradient(135deg, rgba(139,92,246,0.35), rgba(168,85,247,0.4), rgba(124,58,237,0.35), rgba(147,51,234,0.3), rgba(139,92,246,0.35))",
        boxShadow:
          "0 4px 16px rgba(124,58,237,0.15), 0 2px 6px rgba(0,0,0,0.08), inset 0 1px 2px rgba(255,255,255,0.2)",
      }}
    >
      {/* Sharp inner glow */}
      <div
        className="absolute inset-0 rounded-full opacity-0 group-hover/border:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(139,92,246,0.5), rgba(168,85,247,0.6), rgba(124,58,237,0.5))",
          filter: "blur(1.5px)",
        }}
      />

      {/* Main high-contrast container */}
      <div
        className="rounded-full bg-white backdrop-blur-md transition-all duration-500 group-hover/border:shadow-lg relative z-10"
        style={{
          boxShadow:
            "inset 0 2px 4px rgba(255,255,255,1), inset 0 -2px 4px rgba(0,0,0,0.06)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* ========================= */
/* CRISP KEYFRAME ANIMATIONS */
/* ========================= */

const styles = `
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(200%);
  }
}

@keyframes shine {
  0% {
    transform: translateX(-100%) skewX(-15deg);
  }
  100% {
    transform: translateX(200%) skewX(-15deg);
  }
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Crisp fade in animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.nav-link {
  animation: fadeInUp 0.5s ease-out backwards;
}

/* Enhanced border definition */
.crystal-border::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 9999px;
  background: linear-gradient(135deg, rgba(139,92,246,0.4), rgba(168,85,247,0.45), rgba(124,58,237,0.4));
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: -1;
  filter: blur(5px);
}

.crystal-border:hover::before {
  opacity: 1;
}

/* Text rendering optimization */
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
`;

// Inject styles once
if (typeof document !== "undefined") {
  const existingStyle = document.getElementById("navbar-crystal-styles");
  if (!existingStyle) {
    const styleSheet = document.createElement("style");
    styleSheet.id = "navbar-crystal-styles";
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
  }
}
