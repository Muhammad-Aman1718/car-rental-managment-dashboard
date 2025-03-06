"use client";
import {
  decrement,
  increment,
  incrementByAmmount,
} from "@/store/slices/counterSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
// import { prisma } from "@/utils/prisma";

function Home() {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.countReducer.value);

  return (
    <div className="p-4 border rounded-lg shadow-md w-64">
      <h2 className="text-xl font-bold">Counter: {value} </h2>
      <div className="flex gap-2 mt-4">
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded"
          onClick={() => dispatch(increment())}
        >
          +1
        </button>
        <button
          className="px-3 py-1 bg-red-500 text-white rounded"
          onClick={() => dispatch(decrement())}
        >
          -1
        </button>
        <button
          className="px-3 py-1 bg-green-500 text-white rounded"
          onClick={() => dispatch(incrementByAmmount(5))}
        >
          +5
        </button>
      </div>
    </div>
  );
}
export default Home;
