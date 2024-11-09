import RouterMovieList from "../[route]/RouterMovieList";
import Img from "../components/Img";
import { retrieveCookie } from "../_lib/Functions";
import NoData from "../components/NoData";

export default async function Bookmark() {
  const cookie = await retrieveCookie();

  if (cookie.success) {
    const { data } = cookie;
    const filterMovie = data.filter((movie) => {
      return movie.route !== "tv";
    });

    const filterMovie2 = data.filter((movie) => {
      return movie.route === "tv";
    });

    return (
      <>
        <section className="p-[1em]">
          {" "}
          <h1 className=" mb-9 p-3 px-5 shadow-sm rounded-sm mx-auto bg-blue-200 text-xl text-gray-700 font-inter font-medium w-fit  my-5">
            Bookmarked Movies
          </h1>
          <div className="flex flex-wrap justify-center gap-5">
            {filterMovie.length > 0 ? (
              filterMovie.map((movie, index) => {
                return (
                  <RouterMovieList
                    key={movie.id}
                    path={movie.path}
                    id={movie.id}
                    adult={movie.adult}
                    rating={movie.rating}
                    bookmark={true}
                    title={movie.title}
                    date={movie.date}
                    route={movie.route}
                  />
                );
              })
            ) : (
              <Img
                alt={"no data here"}
                src={"/svg/no_data.svg"}
                className={"h-[200px] w-fit mx-auto"}
              />
            )}
          </div>
          <br />
          <h1 className=" mb-9 p-3 px-5 shadow-sm rounded-sm mx-auto bg-blue-200 text-xl text-gray-700 font-inter font-medium w-fit capitalize  my-5">
            Bookmarked Tv series
          </h1>
          <div className="flex flex-wrap justify-center   gap-5">
            {filterMovie2.length > 0 ? (
              filterMovie2.map((movie, index) => {
                return (
                  <RouterMovieList
                    key={movie.id}
                    path={movie.path}
                    id={movie.id}
                    adult={movie.adult}
                    rating={movie.rating}
                    bookmark={true}
                    title={movie.title}
                    date={movie.date}
                    route={movie.route}
                  />
                );
              })
            ) : (
              <NoData className={"h-[200px]"} />
            )}
          </div>
        </section>
      </>
    );
  } else {
    return <NoData className={"h-[500px]"}  />;
  }
}
