import { getDetails } from "@/app/_lib/Functions";
import BookMarkBtn from "@/app/ui/BookMarkBtn.jsx";
import Details from "@/app/ui/Details";
import InternetError from "@/app/ui/InternetError";

export default async function RouteMovieDetail({ params }) {
  const { id, route } = await params;
  const imgUrl = process.env.IMG_URL;

  if (!id) {
    return null;
  }

  const finder = await getDetails(id, route);
  if (finder.success) {
    const { data } = finder;
    const {
      adult,
      poster_path,
      backdrop_path,
      overview,
      release_date,
      first_air_date,
      title,
      name,
      vote_average,
      spoken_languages,
      runtime,
      genres,
      production_companies,
      next_episode_to_air,
      id,
      last_episode_to_air,
    } = data;

    const posterImage = `${imgUrl}/w500/${poster_path}`;
    const bacdropImage = `${imgUrl}/${
      backdrop_path ? "w1280/" + backdrop_path : "w500/" + poster_path
    }`;

    return (
      <Details
        src={posterImage}
        backdrop={bacdropImage}
        overview={overview}
        languages={spoken_languages}
        release_date={release_date || first_air_date}
        title={title || name}
        vote={vote_average}
        adult={adult}
        id={id}
        route={route}
        companies={production_companies}
        runtime={runtime || last_episode_to_air?.runtime || next_episode_to_air?.runtime || 0}
        genres={genres}
      />
    );
  }
  return <InternetError />
}
