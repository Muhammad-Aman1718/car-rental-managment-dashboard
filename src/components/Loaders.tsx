import React from "react";
interface LoaderPropsTypes {
  className?: string;
}
const Loaders = () => {
  return (
    <div className="flex justify-center items-center ">
      <div
        className={`  animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent rounded-full`}
        role="status"
        aria-label="loading"
      ></div>
    </div>
  );
};

export default Loaders;
