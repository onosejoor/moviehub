import { getMovie } from "../_lib/Functions";
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
  console.log(request.message);
};

export default Body;
