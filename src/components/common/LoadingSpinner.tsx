import React from "react";

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="w-full h-full items-center overflow-hidden justify-center flex">
      <div className="animate-spin w-20 h-20">
        <div className="h-full  w-full border-8 border-b-orange-600 rounded-full"></div>
      </div>
    </div>
  );
};
