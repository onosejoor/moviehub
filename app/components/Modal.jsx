"use client";

const { useState } = require("react");
const { default: Img } = require("./Img");

const Modal = ({ src, alt }) => {
  const [modal, setModal] = useState(false);
  function set() {
    setModal((prev) => !prev);
  }
  return (
    <>
      <div
        onClick={set}
        className={` fixed top-0 left-0 h-full w-full backdrop-blur-xl backdrop-brightness-50 ${
          modal ? "block" : "hidden"
        }`}
      ></div>
      {modal ? (
        <div className=" flex gap-5 fixed top-1/2 left-1/2 w-fit h-[400px] items-center flex-col right-1/2 -translate-x-1/2 -translate-y-1/2">
          <button onClick={set} className=" h-fit text-3xl">
            <svg
              className="h-[30px]"
              viewBox="0 0 512 512"
              role="button"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  {" "}
                  <g
                    id="work-case"
                    fill="#ffffff"
                    transform="translate(91.520000, 91.520000)"
                  >
                    {" "}
                    <polygon
                      id="Close"
                      points="328.96 30.2933333 298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48"
                    >
                      {" "}
                    </polygon>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </button>
          <Img
            src={src}
            className={"h-full min-w-[600px] "}
            alt={alt + " modal image"}
          />
        </div>
      ) : (
        <Img
          src={src}
          alt={alt}
          action={set}
          className={
            " transition-transform hover:scale-110 h-40 w-40 overflow-hidden rounded-md cursor-zoom-in"
          }
        />
      )}
    </>
  );
};

export default Modal;
