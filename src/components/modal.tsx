// import useModal from "@/hooks/useModal";
// import React, { useState } from "react";
// import { VscClose } from "react-icons/vsc";

// const Modal = () => {
//   const { isOpen } = useModal();

//   return (
//     <div>
//       {/* <button
//         onClick={handleOpen}
//         type="button"
//         className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
//         aria-haspopup="dialog"
//         aria-expanded="false"
//         aria-controls="hs-slide-down-animation-modal"
//         data-hs-overlay="#hs-slide-down-animation-modal"
//       >
//         Open modal
//       </button> */}

//       {/* {isOpen && ( */}
//       <div className="hs-overlay  size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none">
//         <div className="hs-overlay-animation-target hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0  ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
//           <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
//             <div className="flex justify-between items-center py-3 px-4 border-b border-gray-200 dark:border-neutral-700">
//               <h3
//                 id="hs-slide-down-animation-modal-label"
//                 className="font-bold text-gray-800 dark:text-white"
//               >
//                 Modal title
//               </h3>
//               <button
//                 type="button"
//                 className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
//                 aria-label="Close"
//                 data-hs-overlay="#hs-slide-down-animation-modal"
//               >
//                 <VscClose className="w-5 h-5 " />
//               </button>
//             </div>
//             <div className="p-4 overflow-y-auto">
//               <p className="mt-1 text-gray-800 dark:text-neutral-400">
//                 This is a wider card with supporting text below as a natural
//                 lead-in to additional content.
//               </p>
//             </div>
//             <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t border-gray-200 dark:border-neutral-700">
//               <button
//                 type="button"
//                 className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
//                 data-hs-overlay="#hs-slide-down-animation-modal"
//               >
//                 Close
//               </button>
//               <button
//                 type="button"
//                 className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
//               >
//                 Save changes
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* )} */}
//     </div>
//   );
// };

// export default Modal;
