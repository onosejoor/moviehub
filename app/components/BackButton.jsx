"use client";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className={
        "bg-blue-100 w-fit px-3 py-2 font-rubik font-medium rounded-md hover:bg-blue-400 duration-100 capitalize"
      }
    >
      {"<- go back"}
    </button>
  );
}
