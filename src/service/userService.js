import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/user";

function getAllOwner() {
  return http.get(apiEndpoint + "/owner");
}

function getOwnerById(id) {
  return http.get(apiEndpoint + `/owner/${id}`);
}

function addUser(data) {
  return http.post(apiEndpoint, data);
}

function confirmOwner(id, status) {
  return http.put(apiEndpoint + `/${id}/status`, status);
}

function changePassword(id, password) {
  return http.put(apiEndpoint + `/${id}/change-password`, password);
}

export default {
  getAllOwner,
  getOwnerById,
  addUser,
  confirmOwner,
  changePassword,
};
