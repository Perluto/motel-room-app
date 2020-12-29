import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/post";

function getAll() {
  return http.get(apiEndpoint + "/all");
}

function getConfirmedRoom() {
  return http.get(apiEndpoint + "/all/confirmed");
}

function getPostByUser(id) {
  return http.get(apiEndpoint + `/owner/${id}`);
}

function getPostById(id) {
  return http.get(apiEndpoint + `/${id}`);
}

function addPost(data) {
  return http.post(apiEndpoint, { data: data });
}

function updateStatusPost(id, status) {
  return http.put(apiEndpoint + `/${id}`, { status });
}

function extend(id, dueDate) {
  return http.put(apiEndpoint + `/${id}/extend`, { dueDate: dueDate });
}

function view(id) {
  return http.put(apiEndpoint + `/${id}/view`);
}
function like(id, data) {
  return http.put(apiEndpoint + `/${id}/like`, data);
}

function follow(id, data) {
  return http.put(apiEndpoint + `/${id}/follow`, data);
}

function getLike(idPost, idUser) {
  return http.get(apiEndpoint + `/${idPost}/like/${idUser}`);
}

function getFollow(idPost, idUser) {
  return http.get(apiEndpoint + `/${idPost}/follow/${idUser}`);
}

function getCmt(idPost) {
  return http.get(apiEndpoint + `/${idPost}/comment`);
}

function comment(idPost, data) {
  return http.post(apiEndpoint + `/${idPost}/comment`, data);
}

function confirmComment(idPost, idCmt) {
  return http.put(apiEndpoint + `/${idPost}/comment/${idCmt}`);
}

export default {
  getAll,
  getConfirmedRoom,
  getPostById,
  getPostByUser,
  addPost,
  updateStatusPost,
  getCmt,
  comment,
  confirmComment,
  getLike,
  getFollow,
  like,
  view,
  follow,
  extend,
};
