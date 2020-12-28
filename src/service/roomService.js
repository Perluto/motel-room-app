import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/room";

function getRoomType() {
  return http.get(apiEndpoint + "/room-type");
}
function getRoomTypeById(id) {
  return http.get(apiEndpoint + `/room-type/${id}`);
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

function getRoomByOwnerId(id) {
  return http.get(apiEndpoint + `/owner/${id}`);
}

function updateRoom(id, status) {
  return http.put(apiEndpoint + `/${id}`, status);
}

function addRoom(data) {
  return http.post(apiEndpoint, data);
}

export default {
  getRoomType,
  getRoomTypeById,
  addFacilities,
  getFacilities,
  getRoomById,
  addRoom,
  getRoomByOwnerId,
  updateRoom,
};
