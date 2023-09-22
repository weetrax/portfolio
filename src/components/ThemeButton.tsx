"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      className="group p-1 transition-colors ease-in-out duration-150 focus:outline-none"
      onClick={toggleTheme}
    >
      <span className="sr-only">Toggle dark mode</span>
      {theme === "dark" ? (
        <SunIcon
          className="h-6 w-6 group-hover:rotate-12 duration-150 transition-transform ease-in-out stroke-white group-hover:fill-white"
          aria-hidden="true"
        />
      ) : (
        <MoonIcon
          className="h-6 w-6 group-hover:rotate-12 duration-150 transition-transform ease-in-out stroke-black dark:stroke-white group-hover:fill-black"
          aria-hidden="true"
        />
      )}
    </button>
  );
};

export default ThemeButton;
