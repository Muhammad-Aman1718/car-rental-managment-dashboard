import React from "react";

const Loaders = () => {
  return (
    <div className="flex justify-center items-center ">
      <div
        className="animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
        role="status"
        aria-label="loading"
      ></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loaders;
