// "use client";
// import { addStudent } from "@/store/slices/studentSlice";
// import { useAppDispatch } from "@/store/store";
// import React, { useState } from "react";

// const InputFields = () => {
//   const [cnic, setCnic] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [address, setAddress] = useState("");

//   // const dispatch = useAppDispatch();

//   // const handleForm = (event: React.FormEvent) => {
//   //   event.preventDefault();

//   //   const studentData = {
//   //     cnic,
//   //     firstName,
//   //     lastName,
//   //     email,
//   //     address,
//   //   };
//   //   console.log("Handle form ======> ");
//   //   dispatch(addStudent(studentData));
//   // };

//   const postApi = async () => {
//     try {
//       const myHeaders = new Headers();
//       myHeaders.append("Content-Type", "application/json");

//       const raw = JSON.stringify({ cnic, firstName, lastName, email, address });

//       const requestOptions = {
//         method: "POST",
//         headers: myHeaders,
//         body: raw,
//         redirect: "follow",
//       };

//       const response = await fetch(
//         "http://localhost:3000/api/students",
//         requestOptions
//       );
//       const result = await response.json(); // ✅ Ensure response is properly handled
//       console.log("Response from API:", result);
//     } catch (error) {
//       console.error("Error: Data is not sent", error);
//     }
//   };

//   const handleForm = async (event: React.FormEvent) => {
//     event.preventDefault();

//     // const studentData = {
//     //   cnic,
//     //   firstName,
//     //   lastName,
//     //   email,
//     //   address,
//     // };
//     console.log("Handle form ======> ");

//     await postApi();

//     // dispatch(addStudent(studentData));
//   };

//   return (
//     <div className="flex justify-center items-center absolute ">
//       <form
//         className="bg-white shadow-2xl rounded-xl p-6 w-full max-w-md"
//         onSubmit={handleForm}
//       >
//         <h2 className="text-2xl font-bold mb-4 text-center">Student Form</h2>

//         <label className="block mb-2 text-sm font-medium">CNIC</label>
//         <input
//           value={cnic}
//           type="text"
//           className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//           placeholder="Enter CNIC"
//           onChange={(text) => setCnic(text.target.value)}
//         />
//         <label className="block mb-2 text-sm font-medium">First Name</label>
//         <input
//           value={firstName}
//           type="text"
//           className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//           placeholder="Enter First Name"
//           onChange={(text) => setFirstName(text.target.value)}
//         />

//         <label className="block mb-2 text-sm font-medium">Last Name</label>
//         <input
//           value={lastName}
//           type="text"
//           className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//           placeholder="Enter Last Name"
//           onChange={(text) => setLastName(text.target.value)}
//         />

//         <label className="block mb-2 text-sm font-medium">Email</label>
//         <input
//           value={email}
//           type="email"
//           className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//           placeholder="Enter Email"
//           onChange={(text) => setEmail(text.target.value)}
//         />

//         <label className="block mb-2 text-sm font-medium">Address</label>
//         <textarea
//           value={address}
//           className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
//           placeholder="Enter Address"
//           onChange={(text) => setAddress(text.target.value)}
//         ></textarea>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default InputFields;

"use client";
import React, { useState } from "react";

const InputFields = () => {
  const [cnic, setCnic] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const postApi = async () => {
    try {
      const studentData = { cnic, firstName, lastName, email, address };

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify(studentData);

      const requestOptions: RequestInit = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentData),
      };

      const response = await fetch(
        "http://localhost:3000/api/students",
        requestOptions
      );
      const result = await response.json();
    } catch (error) {
    }
  };

  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();
    await postApi();
  };

  return (
    <div className="flex justify-center items-center absolute">
      <form
        className="bg-white shadow-2xl rounded-xl p-6 w-full max-w-md"
        onSubmit={handleForm}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Student Form</h2>

        <label className="block mb-2 text-sm font-medium">CNIC</label>
        <input
          type="text"
          value={cnic}
          onChange={(e) => setCnic(e.target.value)}
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Enter CNIC"
        />

        <label className="block mb-2 text-sm font-medium">First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Enter First Name"
        />

        <label className="block mb-2 text-sm font-medium">Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Enter Last Name"
        />

        <label className="block mb-2 text-sm font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Enter Email"
        />

        <label className="block mb-2 text-sm font-medium">Address</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Enter Address"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputFields;
