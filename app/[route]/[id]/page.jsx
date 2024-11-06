import { getDetails } from "@/app/_lib/Functions";
import Details from "@/app/ui/Details";

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
      last_episode_to_air
    } = data;

    const posterImage = `${imgUrl}/w500/${poster_path}`;
    const bacdropImage = `${imgUrl}/${
      backdrop_path ? "w1280/" + backdrop_path : "w500/" + poster_path
    }`;
    console.log(data);

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
        companies={production_companies}
        runtime={runtime || last_episode_to_air?.runtime || 0}
        genres={genres}
      />
    );
  }
}
