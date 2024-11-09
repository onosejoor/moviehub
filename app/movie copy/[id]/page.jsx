import { getDetails } from "@/app/_lib/Functions";
import Details from "@/app/ui/Details";

export default async function MovieDetail({ params }) {
  const { id } = await params;
  const imgUrl = process.env.IMG_URL;

  if (!id) {
    return null;
  }

  const finder = await getDetails(id);
  if (finder.success) {
    const { data } = finder;
    const {
      adult,
      poster_path,
      backdrop_path,
      overview,
      release_date,
      title,
      vote_average,
      runtime,
      genres,
      production_companies,
      spoken_languages
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
        release_date={release_date}
        title={title}
        vote={vote_average}
        id={id}
        route={"movie"}
        adult={adult}
        languages={spoken_languages}
        companies={production_companies}
        runtime={runtime}
        genres={genres}
      />
    );
  }
}
