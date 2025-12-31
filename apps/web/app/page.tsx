import React from "react";
import TopBar from "./components/layout/TopBar";
import MainNavbar from "./components/layout/MainNavBar";

export default function Page() {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: "#f1f1f1" }}
    >


      {/* TOP BAR */}
      <div className="relative z-20">
        <TopBar />
      </div>

      {/* MAIN NAVBAR*/}
      <MainNavbar />

      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none z-10 grain-texture"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
