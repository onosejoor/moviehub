import { getVideo } from "@/app/_lib/Functions";
import BackButton from "../components/BackButton";
import NoData from "../components/NoData";

export default async function Watch({ searchParams }) {
  const { v: key, r: route } = await searchParams;

  const movie = await getVideo(key, route);

  if (movie.success) {
    const { data } = movie;
    const fil = data.filter((mov) => {
      return mov.type === "Trailer";
    });
    const [first] = fil;
    if (first) {
      return (
        <>
          <section className="grid gap-5 p-5">
            {" "}
            <BackButton />
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full aspect-video self-stretch md:min-h-96"
              src={`https://youtube.com/embed/${first.key}`}
              title={first.title}
              aria-hidden="true"
            />
          </section>
        </>
      );
    }
    return (
      <>
        <section className="grid gap-5 p-5">
          <BackButton />

          <NoData />
        </section>
      </>
    );
  }
  return <NoData />;
}
