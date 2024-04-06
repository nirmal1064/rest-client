import axios, { AxiosResponse } from "axios";

const API = axios.create();

API.interceptors.request.use((request) => {
  request.headers["request-starttime"] = new Date().getTime();
  return request;
});

function updateEndTime(response: AxiosResponse) {
  response.config.headers["request-totaltime"] =
    new Date().getTime() - response.config.headers["request-starttime"];
  return response;
}

API.interceptors.response.use(updateEndTime, (e) => {
  return Promise.reject(updateEndTime(e.response));
});

export default API;
