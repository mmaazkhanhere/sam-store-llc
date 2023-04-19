import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromApi = async (endpoint) => {
  const options = {
    method: "GET", //indicates that the request will be GET request
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN, //an authorisation header containing Strapi token which is the token for the api
    },
  };
  console.log(options);
  const res = await fetch(`${API_URL}${endpoint}`, options);
  const data = await res.json();

  return data;
};

export const makePaymentRequest = async (endpoint, payload) => {
  const res = await fetch(`${API_URL}${endpoint}`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  return data;
};
