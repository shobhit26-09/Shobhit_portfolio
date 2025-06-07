import React from "react";

const BuyMeCoffee = () => {
  return (
    <a
      href="https://www.buymeacoffee.com/shobhitgupta26" 
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed top-1/2 right-0 -translate-y-1/2 
        bg-gray-800/80 backdrop-blur-md
        text-white
        px-3 py-4 rounded-l-lg
        shadow-md
        font-medium tracking-wide
        text-xs
        flex flex-col items-center justify-center
        gap-1
        transition-transform transform
        hover:translate-x-[-6px] hover:shadow-lg
        cursor-pointer
        z-50
        select-none
        max-w-[110px]
        whitespace-nowrap
      "
      style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      aria-label="Buy me a coffee"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth={2} 
        viewBox="0 0 24 24" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path d="M18 8h1a3 3 0 010 6h-1v1a3 3 0 01-3 3H9a3 3 0 01-3-3v-1H5a3 3 0 010-6h1V7a5 5 0 0110 0v1z" />
        <path d="M9 7v1h6V7a3 3 0 00-6 0z" />
      </svg>
      <span>Buy Me Coffee</span>
    </a>
  );
};

export default BuyMeCoffee;
