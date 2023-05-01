import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromApi = async (endpoint) => {
  //specifies endpoint parameter that specifies the API endpoint to fetch data from
  const options = {
    method: "GET", //indicates that the request will be GET request
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN, //an authorisation header containing Strapi token which is the token for the api
    },
  };
  console.log(options);
  const res = await fetch(
    `${API_URL}${endpoint}`,
    options
  ); /*sends a GET request to the specified endpoint using the fetch function */
  const data =
    await res.json(); /*waits for the API response and extracts the response data by calling the .json method on the response object */

  return data; //returns the data from the API
};

export const makePaymentRequest = async (endpoint, payload) => {
  /*takes two parameters 1)endpoint which is the URL
endpoint to send the request to 2)payload which is an object that contains the data to be sent in the request body */
  const res = await fetch(`${API_URL}${endpoint}`, {
    /*makes an POST request to the specified endpoint using fetch function*/
    method: "POST",
    headers: {
      //sets the header for the HTTP request
      Authorization:
        "Bearer " + STRAPI_API_TOKEN /*authorisation includes a bearer tken */,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      payload
    ) /*sets the request body to the JSON stringified version of the payload parameter */,
  });
  const data =
    await res.json(); /*extracts the JSON-formatted response body from the response object and stores it in
  the data constant */
  return data;
};
