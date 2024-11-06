"use client";
import { useRouter } from "next/navigation";
import Img from "../components/Img";

export default function InternetError() {
  const router = useRouter();

  return (
    <>
      <div className="flex gap-2 items-center flex-col p-5 justify-center">
        <Img
          alt={"no data here"}
          src={"/svg/error.svg"}
          placeholder={true}
          className={"h-[500px] w-fit mx-auto"}
        />
        <h2 className="font-normal text-2xl text-gray-700">
          Poor Internet Connection
        </h2>
        <button
          onClick={() => {
            router.refresh();
          }}
          className="px-5 py-2 bg-blue-500 rounded-lg text-xl text-white hover:bg-blue-300 hover:text-black duration-100"
        >
          Try Again
        </button>
      </div>
    </>
  );
}
