import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/room";

function getRoomType() {
  return http.get(apiEndpoint + "/room-type");
}

function getFacilities(id) {
  return http.get(apiEndpoint + `/facilities/${id}`);
}

function addFacilities(data) {
  return http.post(apiEndpoint + "/facilities", data);
}

function getRoomById(id) {
  return http.get(apiEndpoint + `/${id}`);
}

function addRoom(data) {
  return http.post(apiEndpoint, data);
}

export default {
  getRoomType,
  addFacilities,
  getFacilities,
  getRoomById,
  addRoom,
};
