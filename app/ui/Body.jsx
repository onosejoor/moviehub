import { getMovie } from "../_lib/Functions";
import InternetError from "./InternetError";
import { MovieSection } from "./MovieSection";

const Body = async () => {
  const request = await getMovie();
  if (request.success) {
    const { data, page } = request;
    return (
      <>
        <MovieSection search={true} page={page} movie={data} />
      </>
    );
  }
  return <InternetError  />
};

export default Body;
