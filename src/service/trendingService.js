import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/trending";

function getPostFollowed(idUser) {
  return http.get(apiEndpoint + `/user/${idUser}`);
}

export default {
  getPostFollowed,
};
