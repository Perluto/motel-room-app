import Joi from "joi-browser";

export const schemaPostForm = {
  idWardRef: Joi.string().required().label("Phường/Xã"),
  idDistrictRef: Joi.string().required().label("Quận/Huyện"),
  idCityRef: Joi.string().required().label("Thành phố/Tỉnh"),
  street: Joi.string().required().label("Đường"),
  number: Joi.string().required().label("Số nhà"),
  idRoomTypeRef: Joi.string().required().label("Loại phòng"),
  relatedArea: Joi.string().label("Các nơi liên quan"),
  roomNumber: Joi.number().min(1).required().label("Số phòng"),
  price: Joi.number().min(0).required().label("Giá phòng"),
  area: Joi.number().min(10).required().label("Diện tích"),
  isWithOwner: Joi.boolean().required().label("Chung chủ"),
  bathroom: Joi.string().required().label("Phòng tắm"),
  kitchen: Joi.string().required().label("Phòng bếp"),
  airCondition: Joi.boolean().required().label("Điều hòa"),
  waterHeater: Joi.boolean().required().label("Bình nóng lạnh"),
  balcony: Joi.boolean().required().label("Ban công"),
  electricityPrice: Joi.number().min(0).required().label("Giá điện"),
  waterPrice: Joi.number().min(0).required().label("Giá điện"),
  other: Joi.string().label("Tiện ích khác"),
  postName: Joi.string().required().min(20).max(50).label("Tên bài đăng"),
  duration: Joi.number().min(1).required().label("Thời hạn"),
  period: Joi.string().required().label("Chu kỳ"),
};

export const bathroom = [
  { label: "Khép kín", value: "closed" },
  { label: "Chung", value: "general" },
];

export const kitchen = [
  { label: "Khu bếp riêng", value: "private" },
  { label: "Khu bếp chung", value: "general" },
  { label: "Không nấu ăn", value: "no" },
];

export const defaultData = [
  { label: "Có", value: true },
  { label: "Không", value: false },
];

export const period = [
  { label: "Tuần", value: "week" },
  { label: "Tháng", value: "month" },
  { label: "Năm", value: "year" },
];
