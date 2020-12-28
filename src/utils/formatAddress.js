export function formatAddress(data) {
  let res = "";
  res +=
    data.number +
    ", " +
    data.street +
    ", " +
    data.idWardRef.name +
    ", " +
    data.idDistrictRef.name +
    "," +
    data.idCityRef.name;
  return res;
}
