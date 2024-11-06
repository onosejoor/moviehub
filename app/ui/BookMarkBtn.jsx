"use client";
import toast from "react-hot-toast";
import { deleteCookie, insertCookie } from "../_lib/Functions";

export default function BookMarkBtn({
  path,
  adult,
  rating,
  id,
  date,
  title,
  deleteBtn,
  route,
}) {
  const data = {
    path,
    adult,
    rating,
    id,
    date,
    title,
    route,
  };

  async function setCookie() {
    const setFunction = await insertCookie(data);

    if (setFunction.success) {
      return toast.success(setFunction.message);
    } else {
      return toast.error(setFunction.message);
    }
  }
  async function delCookie() {
    const setFunction = await deleteCookie(id, route);
    if (setFunction.success) {
      return toast.success(setFunction.message);
    } else {
      return toast.error(setFunction.message);
    }
  }
  return !deleteBtn ? (
    <button className="border-none bg-transparent" onClick={setCookie}>
      <span>
        <svg
          viewBox="-4.8 -4.8 33.60 33.60"
          fill="blue"
          height={"30px"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0">
            <rect
              x="-4.8"
              y="-4.8"
              width="33.60"
              height="33.60"
              rx="16.8"
              fill="#E1D9D1"
              strokeWidth="0"
            ></rect>
          </g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M19 1H8.99C7.89 1 7 1.9 7 3H17C18.1 3 19 3.9 19 5V18L21 19V3C21 1.9 20.1 1 19 1Z"></path>{" "}
            <path d="M5 5H15C16.1 5 17 5.9 17 7V23L10 20L3 23V7C3 5.9 3.9 5 5 5Z"></path>{" "}
          </g>
        </svg>
      </span>
    </button>
  ) : (
    <button className="border-none bg-transparent" onClick={delCookie}>
      {" "}
      <svg
        viewBox="0 0 1024 1024"
        height={"25px"}
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        stroke="#000000"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            fill="#FF0000"
            d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
          ></path>
        </g>
      </svg>
    </button>
  );
}
