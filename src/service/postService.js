import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/post";

function getAll() {
  return http.get(apiEndpoint + "/all");
}

function getPostByUser(id) {
  http.get(apiEndpoint + `/owner/${id}`);
}

function getPostById(id) {
  return http.get(apiEndpoint + `/${id}`);
}

function addPost(data) {
  return http.post(apiEndpoint, { data: data });
}

function updateStatusPost(id, status) {
  return http.put(apiEndpoint + `/${id}`, status);
}

function view(id) {
  return http.put(apiEndpoint + `/${id}/view`);
}
function like(id, data) {
  return http.put(apiEndpoint + `/${id}/like`, data);
}

function follow(id, data) {
  return http.put(apiEndpoint + `/${id}/like`, data);
}

export default {
  getAll,
  getPostById,
  getPostByUser,
  addPost,
  updateStatusPost,
  like,
  view,
  follow,
};
