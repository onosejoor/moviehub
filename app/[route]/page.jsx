import { getMovieViaRoute } from "../_lib/Functions";
import InternetError from "../ui/InternetError";
import RouteMovieSection from "./RouteMovieSection";

const Route = async ({ params }) => {
  const { route } = await params;
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
