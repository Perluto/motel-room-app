export function changeImgToBase64(file) {
  return new Promise((resolve, reject) => {
    var reader = new FileReader();
    reader.onloadend = function () {
      resolve(reader.result);
    };

    reader.readAsDataURL(file);
  });
}
