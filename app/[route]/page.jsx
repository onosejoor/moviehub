import { getMovieViaRoute } from "../_lib/Functions";
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
  console.log(request.message);
};
export default Route;
