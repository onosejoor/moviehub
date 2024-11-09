import Link from "next/link";

export default function TrailerBtn({id, route}) {
  return (
    <>
    <Link href={`/watch?v=${id}&r=${btoa(route)}`} className="w-fit mx-auto sm:mx-0">
      <button className="bg-blue-200 py-2 hover:bg-blue-600 hover:text-white mx-auto mduration-200 rounded-md border-none items-center flex gap-3 text-base font-medium text-gray-800 p-3">
        <span>
          <svg
            viewBox="-2.4 -2.4 28.80 28.80"
            fill="none"
            height={"30px"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z"
                fill="blue"
              ></path>{" "}
            </g>
          </svg>
        </span>{" "}
        Play Trailer
      </button>    
    </Link>

    </>
  );
}
