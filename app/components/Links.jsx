import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Links({ link, click, text, svg, second,action }) {
  const path = usePathname();
  

  return (
    <Link
      href={link}
      onClick={action ? action : null}
      className={`no-underline text-background hover:bg-gray-900 rounded-xl ${
        path === link || path === second ? "bg-gray-700" : "bg-inherit"
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
