"use client";
import Img from "./components/Img";

export default function Error({ reset }) {
  return (
    <div className="flex flex-col sm:flex-row gap-[50px] p-[2em] items-center justify-center">
      <Img
        src={"/svg/error.svg"}
        alt={"404 Not found svg"}
        className={" h-[400px] w-[400px] "}
        placeholder={true}
      />

      <div className="grid gap-[20px] place-items-center sm:place-items-start ">
        <h2 className="text-7xl text-blue-700 font-inter font-medium ">Oops</h2>
        <p className="text-gray-600 text-lg text-center sm:text-start">
          An Unnexpected Error Occured. Please try again.
        </p>
        <button
          className=" bg-blue-300 border-white border-2 capitalize px-5 py-3 w-fit rounded-lg hover:bg-blue-700 duration-150 hover:text-white "
          onClick={() => reset()}
        >
          retry
        </button>
      </div>
    </div>
  );
}
