// // import React from "react";

// // const Messages = () => {
// //   return <div>this is messages page</div>;
// // };

// // export default Messages;

// "use client";
// import InputFields from "@/components/inputsFields/inputFields";
// // import { fetchUsers } from "@/store/slices/studentSlice";
// import { useAppDispatch, useAppSelector } from "@/store/store";
// import { useEffect, useState } from "react";

// const StudentsTable = () => {
//   const [showForm, setShowForm] = useState(false);

//   const student = useAppSelector((state) => state.studentReducer.students);

//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   return (
//     <div className="container mx-auto p-4">

//       <button
//         className="mb-4 dark:hover:bg-black bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//         onClick={() => setShowForm(!showForm)}
//       >
//         {showForm ? "Hide Form" : "Add Student"}
//       </button>

//       {showForm && <InputFields />}

//       <table className="w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border p-2">CNIC</th>
//             <th className="border p-2">First Name</th>
//             <th className="border p-2">Last Name</th>
//             <th className="border p-2">Email</th>
//             <th className="border p-2">Address</th>
//           </tr>
//         </thead>
//         <tbody>
//           {student.map((student, index) => (
//             <tr key={index} className="hover:bg-gray-100">
//               <td className="border p-2">{student.cnic}</td>
//               <td className="border p-2">{student.firstName}</td>
//               <td className="border p-2">{student.lastName}</td>
//               <td className="border p-2">{student.email}</td>
//               <td className="border p-2">{student.address}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default StudentsTable;
import Loaders from "@/components/Loaders";
import React from "react";

const Messages = () => {
  return (
    <div>
      Messages
      <Loaders />
    </div>
  );
};

export default Messages;
