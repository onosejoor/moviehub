import { NotFoundBoundary } from "next/dist/client/components/not-found-boundary";
import { getMovieViaRoute } from "../_lib/Functions";
import InternetError from "../ui/InternetError";
import RouteMovieSection from "./RouteMovieSection";
import NotFound from "../not-found";

const Route = async ({ params }) => {
  const include = ["tv", "top_rated", "popular", "now_playing"];

  const { route } = await params;
  if (!include.includes(route)) {
    return <NotFound />;
  }
  const request = await getMovieViaRoute(route);

  if (request.success) {
    const { data, page } = request;
    return (
      <>
        <RouteMovieSection route={route} page={page} movie={data} />
      </>
    );
  }
  return <InternetError />;
};
export default Route;
