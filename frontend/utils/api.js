import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromApi = async (endpoint) => {
  const options = {
    method: "GET", //indicates that the request will be GET request
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN, //an authorisation header containing Strapi token which is the token for the api
    },
  };

  const res = await fetch(`$(API_URL)${endpoint}`, options);
  const data = await res.json();

  return data;
};
