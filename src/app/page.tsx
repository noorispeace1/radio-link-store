"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Top Bar */}
      <div className="bg-[#1073B9] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center py-2 sm:py-0 sm:h-10 gap-2 sm:gap-0 text-center sm:text-left">
          <div className="text-xs sm:text-sm">Have any question? 01630971218 | info@radiolinkstore.com</div>
          <div className="flex gap-4">
            {/* Social Icons SVG */}
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/></svg>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.015 3.015 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4 bg-white">
        <div className="flex justify-between items-center">
          {/* Logo area */}
          <div className="flex items-center gap-3">
            <div className="text-[#E63946] flex flex-col justify-center items-center">
              <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M12 2L2 22h20L12 2zm0 4l6 14H6l6-14z" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[#1073B9] text-xl md:text-[28px] font-black leading-none tracking-tight">RADIOLINK STORE</span>
              <span className="text-gray-500 text-[8px] md:text-[10px] uppercase font-bold tracking-wider">Premium Communication Solutions</span>
            </div>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-800 focus:outline-none p-2">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-5 text-sm font-bold text-gray-700">
            <a href="#" className="hover:text-[#1073B9] shrink-0">HOME</a>
            <a href="#" className="hover:text-[#1073B9] shrink-0">ABOUT</a>
            <a href="#" className="hover:text-[#1073B9] shrink-0">SERVICES</a>
            <a href="#" className="hover:text-[#1073B9] shrink-0">SHOP</a>
            <a href="#" className="hover:text-[#1073B9] shrink-0">BLOG</a>
            <a href="#" className="hover:text-[#1073B9] shrink-0">OUR CLIENTS</a>
            <a href="#" className="hover:text-[#1073B9] shrink-0">NEWS & MEDIA</a>
            <a href="#" className="hover:text-[#1073B9] shrink-0">CONTACT</a>
            <button className="bg-[#EF3340] text-white px-5 py-2.5 font-bold text-xs hover:bg-red-700 transition shrink-0 ml-2">
              APPLY FOR A JOB
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 flex flex-col gap-4 text-sm font-bold text-gray-700 border-t pt-4 px-2">
            <a href="#" className="hover:text-[#1073B9] block">HOME</a>
            <a href="#" className="hover:text-[#1073B9] block">ABOUT</a>
            <a href="#" className="hover:text-[#1073B9] block">SERVICES</a>
            <a href="#" className="hover:text-[#1073B9] block">SHOP</a>
            <a href="#" className="hover:text-[#1073B9] block">BLOG</a>
            <a href="#" className="hover:text-[#1073B9] block">OUR CLIENTS</a>
            <a href="#" className="hover:text-[#1073B9] block">NEWS & MEDIA</a>
            <a href="#" className="hover:text-[#1073B9] block">CONTACT</a>
            <button className="bg-[#EF3340] text-white px-4 py-3 font-bold text-xs hover:bg-red-700 transition w-full text-center mt-2">
              APPLY FOR A JOB
            </button>
          </div>
        )}
      </div>

      {/* Category Header */}
      <div className="bg-[#1073B9]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center h-auto md:h-[52px] py-3 md:py-0 gap-3 md:gap-0">
          <div className="text-white font-bold text-base md:text-lg w-full md:w-[280px] shrink-0 text-center md:text-left">
            PRODUCT CATEGORY
          </div>
          <div className="flex-1 w-full md:pl-6 md:pr-[20%]">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Enter product name..."
                className="w-full pl-4 pr-10 py-2 md:py-2.5 bg-white text-sm focus:outline-none text-gray-800 rounded-sm md:rounded-none"
              />
              <svg className="w-4 h-4 absolute right-4 top-2.5 md:top-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8 flex flex-col md:flex-row gap-6 md:gap-8">
        
        {/* Sidebar */}
        <div className="w-full md:w-[280px] shrink-0 order-2 md:order-1">
          <div className="flex justify-between items-center border-b border-gray-200 pb-3 mb-2">
            <h2 className="font-bold text-gray-900 text-base md:text-[15px]">Category</h2>
            <a href="#" className="text-[#1073B9] text-sm md:text-[13px] font-bold hover:underline">Clear</a>
          </div>
          <ul className="text-gray-600 text-sm md:text-[14px] flex flex-col">
            {[
              "Walkie Talkie",
              "Security Equipment",
              "CCTV Camera",
              "Metal Detector",
              "Fire Safety Equipment",
              "PBX System",
              "Access Control System",
              "All Accessories",
            ].map((cat, idx) => (
              <li key={idx} className="border-b border-gray-100 py-3 md:py-3.5 hover:text-[#1073B9] cursor-pointer">
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col gap-6 md:gap-8 overflow-hidden order-1 md:order-2">
          
          {/* Banner */}
          <div className="w-full bg-[#1A1A1A] rounded overflow-hidden relative flex flex-col md:flex-row items-center p-6 md:p-12 h-[260px] md:h-[340px] justify-center md:justify-end">
            <div className="z-10 text-white max-w-lg text-center md:text-right w-full md:w-auto relative">
              <h2 className="text-4xl md:text-5xl font-medium mb-2 tracking-wide leading-tight">METAL<br/>DETECTORS</h2>
              <p className="text-lg md:text-xl text-gray-300">Hand-Held & Walk-Through</p>
              <div className="mt-6 md:mt-8 flex justify-center md:justify-end">
                {/* Active Force small logo for banner */}
                <div className="flex items-center gap-2 mt-2 md:mt-12">
                   <svg className="w-6 h-6 md:w-8 md:h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M12 2L2 22h20L12 2zm0 4l6 14H6l6-14z" />
                   </svg>
                   <div className="text-left leading-none">
                     <div className="font-bold text-lg md:text-xl italic">RadioLink</div>
                     <div className="text-[6px] md:text-[8px] text-gray-400 uppercase">Store</div>
                   </div>
                </div>
              </div>
            </div>
            
            {/* Mock graphics for banner */}
            <div className="hidden md:flex absolute left-8 lg:left-32 bottom-8 top-16 w-24 lg:w-32 border-l-[12px] border-r-[12px] border-t-[12px] border-[#555] rounded-t opacity-90 flex-col justify-end items-center shadow-2xl">
                <div className="w-full h-full border-4 border-[#333] border-b-0 bg-[#222]"></div>
                <div className="absolute top-1/2 -left-6 bg-yellow-500 text-black text-[8px] font-bold px-1 py-4 -rotate-90">GARRETT</div>
            </div>

            {/* Pagination dots */}
            <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-[#1073B9]"></div>
              <div className="w-2 h-2 rounded-full bg-gray-700"></div>
              <div className="w-2 h-2 rounded-full bg-gray-700"></div>
              <div className="w-2 h-2 rounded-full bg-gray-700"></div>
            </div>
          </div>

          {/* Section Title */}
          <h2 className="text-lg md:text-[26px] mt-0 md:mt-2 mb-0 md:mb-2 font-normal text-gray-700 tracking-wide text-center md:text-left leading-snug">
            Walkie Talkie Price in Bangladesh 2026 | BTRC Licensed — RadioLink Store
          </h2>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            
            {/* Product Card Template */}
            {[
              { title: "MOTOROLA MT918 TWO-WAY CIVILIAN RADIO SE..", price: "6500 TK", brand: "MOTOROLA MT-918", color: "bg-[#E0F2F1]" },
              { title: "BAOFENG UV82 Dual band Radio Bangladesh", price: "8500 TK", brand: "BAOFENG UV-82", color: "bg-[#E0F2F1]" },
              { title: "BaoFeng BF888S Blue SBR walkie Talkie Ra..", price: "5500 TK", brand: "BAOFENG BF-888S SBR", color: "bg-[#E0F2F1]" },
              { title: "Motorola GP3688 Two-way Radio set", price: "15500 TK", brand: "MOTOROLA GP-3688", color: "bg-[#E0F2F1]" },
            ].map((product, idx) => (
              <div key={idx} className="flex flex-col transition bg-[#F9F9F9] group pb-6 mx-auto sm:mx-0 w-full max-w-[320px] sm:max-w-none shadow-sm sm:shadow-none rounded-md sm:rounded-none overflow-hidden sm:overflow-visible">
                {/* Image Area */}
                <div className={`${product.color} relative h-[220px] md:h-[240px] p-3 flex flex-col justify-between overflow-hidden`}>
                  
                  {/* Top Badges/Text */}
                  <div className="flex justify-between items-start z-10">
                    <div className="w-[38px] h-[38px] md:w-[42px] md:h-[42px] rounded-full border border-green-500 flex items-center justify-center text-[6px] md:text-[7px] font-bold text-green-700 leading-[8px] md:leading-[9px] text-center bg-white shadow-sm">
                      100%<br/>ORIGINAL
                    </div>
                    <div className="text-[10px] md:text-[11px] font-bold text-[#1073B9] uppercase tracking-wide mt-1 text-right max-w-[60%]">{product.brand}</div>
                  </div>

                  {/* Mock Product Image centered */}
                  <div className="absolute inset-0 flex items-center justify-center pt-6 md:pt-8">
                    {/* Abstract Radio Mockup */}
                    <div className="relative w-14 h-28 md:w-16 md:h-32 bg-[#2D2D2D] rounded flex flex-col items-center p-1.5 md:p-2 shadow-2xl z-10">
                      <div className="w-1.5 h-5 md:w-2 md:h-6 bg-black absolute -top-4 md:-top-5 right-2 rounded-t-sm"></div>
                      <div className="w-8 h-5 md:w-10 md:h-6 bg-[#1A1A1A] rounded mb-1.5 md:mb-2"></div>
                      <div className="w-full flex-1 bg-[#222] rounded text-green-400 text-[7px] md:text-[8px] flex justify-center items-center font-mono">136.000</div>
                    </div>
                  </div>

                  {/* Central Watermark logo */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none pr-2 pl-8 md:pr-4 md:pl-12 mt-10 md:mt-12">
                     <div className="flex items-center gap-1 opacity-90">
                       <svg className="w-5 h-5 md:w-6 md:h-6 text-[#1073B9]" viewBox="0 0 24 24" fill="currentColor">
                         <path d="M12 2L2 22h20L12 2zm0 4l6 14H6l6-14z" />
                       </svg>
                       <div className="text-left leading-none">
                         <div className="font-bold text-xs md:text-sm italic text-[#1073B9]">RadioLink</div>
                         <div className="text-[4px] md:text-[5px] text-gray-500 uppercase">Store</div>
                       </div>
                     </div>
                   </div>

                  {/* Bottom Contact Bar */}
                  <div className="bg-[#1073B9] text-white text-[6px] md:text-[7px] p-1.5 md:p-2 flex justify-between items-center mt-auto z-10 absolute bottom-0 left-0 right-0">
                    <div className="font-bold flex items-center gap-1 md:gap-1.5">
                      <div className="border border-white p-0.5 rounded-sm">
                        <svg className="w-2.5 h-2.5 md:w-3 md:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      </div>
                      <div className="leading-tight">
                        CALL NOW<br/>01630-971218<br/>01844-223077
                      </div>
                    </div>
                    <div className="text-right flex flex-col justify-end">
                       <span className="opacity-80">www.radiolinkstore.com</span>
                    </div>
                  </div>
                </div>

                {/* Text Area */}
                <div className="px-3 md:px-4 pt-4 md:pt-5 pb-0 flex flex-col items-center text-center gap-2 md:gap-3 bg-[#F9F9F9] flex-1">
                  <h3 className="text-xs md:text-[13px] font-normal text-gray-600 leading-snug px-1 md:px-2 h-10 flex items-center justify-center">
                    <span className="line-clamp-2">{product.title}</span>
                  </h3>
                  <div className="font-bold text-sm md:text-[15px] text-gray-800">
                    {product.price}
                  </div>
                  <button className="bg-[#EF3340] text-white text-[10px] md:text-[11px] font-bold px-4 md:px-6 py-1.5 md:py-2 rounded-sm hover:bg-red-700 transition mt-1 md:mt-2">
                    CALL US NOW
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
