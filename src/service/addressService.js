import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/address";

function getCity() {
  return http.get(apiEndpoint + "/city");
}

function getDistrict(idCityRef) {
  return http.get(apiEndpoint + `/district?idCityRef=${idCityRef}`);
}

function getWard(idDistrictRef) {
  return http.get(apiEndpoint + `/ward?idDistrictRef=${idDistrictRef}`);
}
function getAddress(id) {
  return http.get(apiEndpoint + `/${id}`);
}

function addAddress(data) {
  return http.post(apiEndpoint, {
    data: data,
  });
}

export default {
  getCity,
  getDistrict,
  getWard,
  getAddress,
  addAddress,
};
