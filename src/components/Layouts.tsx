"use client";

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

export default Container;
