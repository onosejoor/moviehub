import Link from "next/link";
import Button from "../components/Button";
import Img from "../components/Img";
import { useEffect, useState } from "react";
import { getSearchMovie } from "../_lib/Functions";
import SearchDiv from "../components/SearchDiv";

const Header = ({ data, search }) => {
  const [first] = data;
  const image = `https://image.tmdb.org/t/p/w1280/${first.backdrop_path}`;
  const [text, setText] = useState("");
  const [select, setSelect] = useState(search === "tv" ? "tv" : "movie");
  const [searchMovie, setSearchMovie] = useState([]);

  async function get() {
    const searchAPI = await getSearchMovie(select, text);
    if (searchAPI.success) {
      const response = searchAPI.data;
      const slicedData = response.slice(0, 5);
      setSearchMovie(slicedData);
    }
  }
  useEffect(() => {
    async function get() {
      const searchAPI = await getSearchMovie(select, text);
      if (searchAPI.success) {
        const response = searchAPI.data;
        setSearchMovie(response);
      }
    }
    get();
  }, [text, select]);

  return (
    <>
      <header className="lg:h-[580px] h-screen w-full relative overflow-hidden">
        <div className=" py-2 w-full md:px-10 px-5 md:flex-row gap-5 flex absolute z-10 top-2 md:justify-between md:items-center flex-col justify-center">
          <div className="roundes-1/2 self-start  ">
            <Link href={"/"}>
              <div className="flex gap-2 items-center">
                {" "}
                <svg
                  viewBox="0 0 1024 1024"
                  className="icon h-14 "
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M892.9 145.2H130.1c-33.5 0-60.7 27.2-60.7 60.7v503.4c0 33.4 27.2 60.7 60.7 60.7h762.8c33.5 0 60.7-27.2 60.7-60.7V205.8c0-33.4-27.3-60.6-60.7-60.6z m8.7 564.1c0 4.8-3.9 8.7-8.7 8.7H130.1c-4.8 0-8.7-3.9-8.7-8.7V205.8c0-4.8 3.9-8.7 8.7-8.7h762.8c4.8 0 8.7 3.9 8.7 8.7v503.5zM719.3 823.9h-416c-14.4 0-26 11.6-26 26s11.6 26 26 26h416.1c14.4 0 26-11.6 26-26s-11.7-26-26.1-26z m-83.2-384.8l-173.4-104c-8-4.8-18-4.9-26.2-0.3-8.1 4.6-13.2 13.3-13.2 22.6v208c0 9.4 5 18 13.2 22.6 4 2.3 8.4 3.4 12.8 3.4 4.6 0 9.3-1.3 13.4-3.7l173.4-104c7.8-4.7 12.6-13.2 12.6-22.3 0-9.1-4.8-17.6-12.6-22.3z"></path>
                  </g>
                </svg>
                <h3 className="font-rubik text-slate-100 text-xl">Moviehub </h3>
              </div>
            </Link>
          </div>
          <>
            <div className="flex flex-col gap-5">
              <div
                role="form"
                className="flex bg-white backdrop-blur rounded-lg overflow-x-hidden  items-center w-full md:w-fit self-end px-3 gap-2 "
              >
                <select
                  defaultValue={select}
                  onChange={(e) => setSelect(e.target.value)}
                  name="select "
                  className="outline-none  bg-transparent text-gray-500 cursor-pointer"
                >
                  <option
                    value="movie"
                    className=" capitalize text-lg text-gray-500 cursor-pointer rounded-none"
                  >
                    Movie
                  </option>
                  <option
                    value="tv"
                    className="capitalize text-lg text-gray-500 cursor-pointer rounded-none"
                  >
                    tv series
                  </option>
                </select>
                <input
                  onChange={(e) => setText(e.target.value)}
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search Movies"
                  className="px-3 outline-none text-base py-2 border-l border-r bg-transparent border-blue-600 placeholder:text-gray-500  w-full md:w-[400px] flex-1 "
                />
                <button
                  className="appearance-none bg-transparent border-none"
                  onClick={get}
                >
                  {" "}
                  <svg
                    role="button"
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    fill="none"
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
                        d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                        stroke="#000000"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </button>
              </div>
              {searchMovie.length > 0 ? (
                <div className="flex w-full md:max-w-[550px] overflow-auto no-scrollbar h-[350px] md:h-[450px] ml-auto flex-col gap-1 bg-transparent backdrop-blur-md backdrop-brightness-50 rounded-xl p-2  border-2 border-white ">
                  {searchMovie.map((movie) => {
                    return (
                      <SearchDiv key={movie.id} data={movie} route={select} />
                    );
                  })}
                </div>
              ) : text.trim() ? (
                <div
                  className=" h-fit px-5 py-2 border-[2px] rounded-lg backdrop-brightness-50 border-white text-white backdrop-blur-lg items-center capitalize"
                >
                  No Result found with the keyword {text}
                </div>
              ) : null}
            </div>
          </>
        </div>
        <div>
          <Img
            className={
              "w-full object-cover md:h-full h-screen filter brightness-50"
            }
            src={image}
            alt={first.name || first.title}
          />
        </div>
        <div className="absolute text-center w-full top-1/3 md:top-1/4 px-5 md:pl-10 pl-5 md:w-3/4  flex gap-5 flex-col right-1/2 translate-x-1/2">
          <h1 className="text-4xl md:text-7xl  font-semibold text-white capitalize">
            <span className="text-blue-700 ">Moviehub,</span> Your favourite
            movie finder
          </h1>
        </div>
      </header>
    </>
  );
};
export default Header;
