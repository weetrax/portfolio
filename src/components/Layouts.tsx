"use client";

import { ThemeProvider } from "next-themes";

const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">{children}</div>
  );
};

export const LayoutContainer: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">{children}</div>
  );
};

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      {children}
    </ThemeProvider>
  );
};

export const Main: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-dark-500 text-black dark:text-white py-6">
      {children}
    </main>
  );
};

export default Container;
