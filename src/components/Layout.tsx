import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex justify-center h-screen bg-orange-50 w-full">
      <div className="flex max-w-7xl w-full flex-col gap-8">
        <div className="w-full m-auto p-4 border rounded-2xl bg-white overflow-y-auto h-[40rem] ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
