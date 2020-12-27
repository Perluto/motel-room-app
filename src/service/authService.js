import http from "./httpService";
import { apiUrl } from "../config.json";
import jwtDecode from "jwt-decode";

const apiEndpoint = apiUrl + "/auth";

http.setJwt(getJwt());

async function login(username, password) {
  const { data: jwt } = await http.post(apiEndpoint, {
    username,
    password,
  });
  localStorage.setItem("token", jwt);
}

async function loginWithJwt(jwt) {
  localStorage.setItem("token", jwt);
}

function logout() {
  localStorage.removeItem("token");
}

function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

function getJwt() {
  return localStorage.getItem("token");
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};
