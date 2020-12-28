const bathroom = [
  { label: "khép kín", value: "closed" },
  { label: "chung", value: "general" },
];

const kitchen = [
  { label: "khu bếp riêng", value: "private" },
  { label: "khu bếp chung", value: "general" },
  { label: "không nấu ăn", value: "no" },
];

function getLabel(data, value) {
  let res = "";
  data.forEach((e) => {
    if (value === e.value) {
      res = e.label;
    }
  });
  return res;
}

export function formatFacilities(data, room) {
  if (!data || !room) return "";
  let res = " Nhà có ";
  res += room.roomNumber + " phòng và ";
  res += room.isWithOwner ? "ở chung với chủ." : "không ở chung với chủ.";

  res +=
    `\n Giá điện: ${data.electricityPrice} nghìn đồng/kWh.` +
    `\n Giá nước: ${data.waterPrice} nghìn đồng/m3.`;
  res += `\n Phòng tắm ${getLabel(bathroom, data.bathroom)}, ${getLabel(
    kitchen,
    data.kitchen
  )}.`;

  res += "\n Các tiện ích: ";
  res += `${data.airCondition ? "Có" : "Không có"} điều hòa, `;
  res += `${data.waterHeater ? "có" : "không có"} bình nóng lạnh, `;
  res += `${data.balcony ? "có" : "không có"} ban công.`;

  res += `\n Khác: ${data.other}.`;

  return res;
}
