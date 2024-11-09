import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Links({ link, click, text, svg, action, className }) {
  const path = usePathname();

  return (
    <Link
      href={link}
      onClick={action ? action : null}
      className={`no-underline text-background hover:bg-gray-900 rounded-xl ${
        path === link ? "bg-gray-700" : "bg-inherit"
      } `}
    >
      <li
        role="button"
        className={
          "px-2  text-white group/svg font-roboto capitalize flex items-center gap-4 py-2  "
        }
        onClick={click}
      >
        <span className={` pr-2  py-1 `}>{svg}</span>{" "}
        <span className=" whitespace-nowrap duration-200 opacity-0 group-data-[nav=true]/nav:opacity-100 group-hover/nav:opacity-100 text-base">
          {text}
        </span>
      </li>
    </Link>
  );
}

{
  /* <Link
href={link}
onClick={action ? action : null}
className={`no-underline text-background sm:hover:bg-gray-800 rounded-xl sm:w-full ${
  path === link ? "sm:bg-gray-700" : "bg-inherit"
} `}
>
<li
  role="button"
  className={
    "px-2 sm:justify-start text-gray-900 sm:text-white group/svg font-roboto capitalize flex sm:flex-row flex-col justify-center items-center gap-2 py-2"
  }
  onClick={click}
>
  <span
    className={`sm:pr-2 sm:px-0  sm:py-1  px-5 py-2 rounded-full ${
      path === link ? "bg-gray-300 sm:bg-inherit" : "bg-inherit"
    }`}
  >
    {svg}
  </span>{" "}
  <span className=" whitespace-nowrap duration-200 opacity-100 sm:opacity-0 group-data-[nav=true]/nav:opacity-100 group-hover/nav:opacity-100 text-base">
    {text}
  </span>
</li>
</Link> */
}
