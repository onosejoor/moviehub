"use server";
import axios from "axios";
import { cookies } from "next/headers";
const baseUrl = process.env.BASE_URL;
const apikey = process.env.API_KEY;

export async function getMovie() {
  try {
    const request = await axios.get(`${baseUrl}/discover/movie?${apikey}`);
    const response = await request.data;
    console.log("in use!");

    if (response) {
      return { success: true, data: response.results, page: response.page };
    }
    return { success: false, message: "No Data Returned!" };
  } catch (error) {
    return { success: false, message: "Network Error" };
  }
}

export async function getPage(pageNumber) {
  try {
    const request = await axios.get(
      `${baseUrl}/discover/movie?${apikey}&page=${pageNumber.toString()}`
    );
    const response = await request.data;
    if (response) {
      return { success: true, data: response.results, page: response.page };
    }
    console.log(request.statusText);

    return { success: false, message: "No Data Returned!" };
  } catch (error) {
    return { success: false, message: "Network Error" };
  }
}

export async function getMovieViaRoute(route) {
  try {
    if (route !== "tv") {
      const request = await axios.get(`${baseUrl}/movie/${route}?${apikey}`);
      const response = await request.data;
      if (response) {
        return { success: true, data: response.results, page: response.page };
      }
      return { success: false, message: "No Data Returned!" };
    } else {
      const request2 = await axios.get(
        `${baseUrl}/trending/${route}/day?${apikey}`
      );
      const tvResponse = await request2.data;
      if (tvResponse) {
        return {
          success: true,
          data: tvResponse.results,
          page: tvResponse.page,
        };
      }
      return { success: false, message: "No Data Returned!" };
    }
  } catch (error) {
    return { success: false, message: "Network Error" };
  }
}
export async function getPageViaRoute(pageNumber, route) {
  try {
    if (route !== "tv") {
      const request = await axios.get(
        `${baseUrl}/movie/${route}?${apikey}&page=${pageNumber}`
      );
      const response = await request.data;
      if (response) {
        return { success: true, data: response.results, page: response.page };
      }
      return { success: false, message: "No Data Returned!" };
    } else {
      const request2 = await axios.get(
        `${baseUrl}/trending/${route}/day?${apikey}&page=${pageNumber}`
      );
      const tvResponse = await request2.data;
      if (tvResponse) {
        return {
          success: true,
          data: tvResponse.results,
          page: tvResponse.page,
        };
      }
      return { success: false, message: "No Data Returned!" };
    }
  } catch (error) {
    return { success: false, message: "Network Error" };
  }
}

export async function getDetails(id, route) {
  if (route === "tv") {
    try {
      const request = await axios.get(`${baseUrl}/tv/${id}?${apikey}`);

      const response = await request.data;

      if (response) {
        return { success: true, data: response };
      }
      return { success: false, message: "Error" };
    } catch (error) {
      

      return { success: false, message: error.message };
    }
  } else {
    try {
      const request = await axios.get(`${baseUrl}/movie/${id}?${apikey}`);

      const response = await request.data;

      if (response) {
        return { success: true, data: response };
      }
      return { success: false, message: "Error" };
    } catch (error) {
      

      return { success: false, message: error.message };
    }
  }
}

export async function getSearchMovie(route, keyWord) {
  try {
    const request = await axios.get(
      `${baseUrl}/search/${route}?query=${keyWord}&${apikey}`
    );

    const response = await request.data;

    if (response) {
      return { success: true, data: response.results };
    }
    return { success: false, message: "Error" };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

export async function insertCookie(data) {
  const cookie = await cookies();
  const { path, adult, rating, title, date, id, route } = data;

  const setObject = {
    id: id,
    path: path,
    adult: adult,
    rating: rating,
    title: title,
    date: date,
    route: route,
  };
  const getCookie = await retrieveCookie();

  if (!getCookie.success) {
    const settr = [setObject];
    cookie.set("movie", JSON.stringify(settr));
    return { success: true, message: "Movie bookmarked" };
  } else {
    const { data } = getCookie;
    const findDuplicateId = data.find((movie) => {
      return movie.id === id;
    });

    if (findDuplicateId) {
      return { success: false, message: "Movie already bookmarked" };
    }
    const settr = [...getCookie.data, setObject];
    cookie.set("movie", JSON.stringify(settr));
    return { success: true, message: "Movie bookmarked" };
  }
}

export async function deleteCookie(id) {
  const cookie = await cookies();

  const getCookie = await retrieveCookie();
  const { data } = getCookie;

  const findMovie = data.filter((movie) => {
    return movie.id !== id;
  });
  cookie.set("movie", JSON.stringify(findMovie));
  return { success: true, message: "Bookmark deleted" };
}

export async function retrieveCookie() {
  const cookie = await cookies();
  const movieCookie = cookie.get("movie").value;

  if (movieCookie && JSON.parse(movieCookie).length > 0) {
    return { success: true, data: JSON.parse(movieCookie) };
  }
  return {
    success: false,
    message: "No Movie/Tv series has been bookmarked yey",
  };
}
