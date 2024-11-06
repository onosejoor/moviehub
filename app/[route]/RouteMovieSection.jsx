"use client";
import { useState } from "react";
import { getPageViaRoute } from "../_lib/Functions";
import Loading from "../loading";
import Header from "../ui/Header";
import RouterMovieList from "./RouterMovieList";

export default function RouteMovieSection({ movie, page, route }) {
  const [data, setData] = useState({
    page: page,
    movie: movie,
  });
  const [loading, setLoading] = useState(false);

  async function getMovieViaPage(id) {
    setLoading(true);
    try {
      const request = await getPageViaRoute(id, route);
      if (request.success) {
        const { data, page } = request;
        setData({
          movie: data,
          page: page,
        });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {" "}
      <Header data={data.movie} search={route} />
      <>
        <section className=" px-5 mt-10 py-5 no-scrollbar">
          <h2 className=" mb-9 p-3 px-5 shadow-sm rounded-sm bg-blue-50 text-xl text-gray-700 font-inter font-medium w-fit capitalize my-5">
            Browse Your {route !== "tv" ? `${route} movies` : `${route} series`}
          </h2>
          <div className="flex flex-wrap md:gap-10 gap-3 gap-y-10 md:justify-between justify-evenly ">
            {" "}
            {data.movie &&
              data.movie.map((movie, index) => {
              
                return (
                  <RouterMovieList
                    key={movie.id}
                    adult={movie.adult}
                    route={route}
                    title={movie.title || movie.name}
                    info={movie.overview}
                    id={movie.id}
                    rating={movie.vote_average}
                    path={movie.poster_path}
                    date={movie.release_date || movie.first_air_date}
                  />
                );
              })}
          </div>
        </section>
      </>
      <div className="flex gap-5 justify-center my-5 items-center *:duration-100 *:rounded-md">
        <button
          className=" px-5 bg-blue-100 py-2"
          onClick={() => getMovieViaPage(data.page - 1)}
        >
          « Previous
        </button>
        <b className="font-rubik text-base text-gray-950">{data.page}</b>

        <button
          className=" px-5 hover:bg-blue-500 hover:text-white py-2"
          onClick={() => getMovieViaPage(data.page + 1)}
        >
          Next »
        </button>
      </div>
    </>
  );
}