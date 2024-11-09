"use client";
import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import Header from "./Header";
import { getPage } from "../_lib/Functions";
import Loading from "../loading";
import toast from "react-hot-toast";

export function MovieSection({ movie, page }) {
  const [data, setData] = useState({
    page: page,
    movie: movie,
  });
  const [loading, setLoading] = useState(false);

  async function getMovieViaPage(id) {
    setLoading(true);
    try {
      const request = await getPage(id);
      if (request.success) {
        const { data, page } = request;
        setData({
          movie: data,
          page: page,
        });
        window.scrollTo({
          top: 0,
        });
        setLoading(false);
      } else {
        toast.error(request.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {" "}
      <Header data={data.movie} />
      <>
        <section className=" px-5 mt-10 py-5 no-scrollbar">
          <h1 className=" mb-9 p-3 px-5 shadow-sm rounded-sm bg-blue-50 text-xl text-gray-700 font-inter font-medium w-fit  my-5">
            Trending Movies
          </h1>
          <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5 gap-3 gap-y-10 place-items-center">
            {" "}
            {data.movie.map((movie, index) => {
              return (
                <MovieList
                  key={index}
                  adult={movie.adult}
                  title={movie.title}
                  info={movie.overview}
                  id={movie.id}
                  rating={movie.vote_average}
                  path={movie.poster_path}
                  date={movie.release_date}
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
