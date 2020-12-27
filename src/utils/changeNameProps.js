export function changeNameProps(data, name, alterName) {
  if (!data) return null;
  data.forEach((obj) => {
    obj[alterName] = obj[name];
    delete obj[name];
  });

  return data;
}
