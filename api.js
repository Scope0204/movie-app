import axios from "axios"; // npm i axios@0.18.0

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: { api_key: "10923b261ba94d897ac6b81148314a3f", language: "en-US" }
});

export const movies = {
  getMovie: id =>
    api.get(`movie/${id}`, { params: { append_to_response: "videos" } }),
  getPopular: () => api.get("movie/popular"),
  getUpcoming: () => api.get("movie/upcoming"),
  getNowPlaying: () => api.get("movie/now_playing"),
  searchMovies: term =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term) // 값을 인코딩하고 그 문자열을 탐색함
      }
    })
};

export const tv = {
  getShow: id =>
    api.get(`tv/${id}`, { params: { append_to_response: "videos" } }),
  getPopular: () => api.get("tv/popular"),
  getAiringThisWeek: () => api.get("tv/top_rated"),
  getAiringToday: () => api.get("tv/airing_today"),
  searchTv: term =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term) // 값을 인코딩하고 그 문자열을 탐색함
      }
    })
};
