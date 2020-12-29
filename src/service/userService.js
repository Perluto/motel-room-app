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

function confirmOwner(id) {
  return http.put(apiEndpoint + `/${id}/status`);
}

function changePassword(id, password) {
  return http.put(apiEndpoint + `/${id}/change-password`, password);
}

function changProfile(id, data) {
  return http.put(apiEndpoint + `/owner/${id}/profile`, { data });
}

export default {
  getAllOwner,
  getOwnerById,
  addUser,
  confirmOwner,
  changePassword,
  changProfile,
};
