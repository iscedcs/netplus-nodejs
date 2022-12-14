"use strict";
require("dotenv").config();

const slug = () => {
  return (
    Math.random().toString(36).substring(2, 7) +
    Math.random().toString(36).substring(2, 7)
  );
};

const code = () => {
  let code = Math.random() * (999999999999999) + 10000;
  code = Math.round(code);
  return code;
};

const guid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const toUnique = (a, b, c) => {
  b = a.length;
  while ((c = --b)) while (c--) a[b] !== a[c] || a.splice(c, 1);
  return a;
};

const removeItem = (array, element) => {
  let index = array.indexOf(element);
  if (index >= 1) {
    array.splice(index, 1);
  }
  return array;
};

const requiredFields = (object, array) => {
  let result;
  array.forEach((item) => {
    !object[item] ? (result = `${item} is required`) : (result = false);
  });
  return result;
};

const getEXT = (file) => {
  file = file.split(".");
  let count = file.length;
  count = count - 1;
  return file[count];
};

const isImage = (type) => {
  if (
    type === "jpg" ||
    type === "JPG" ||
    type === "jpeg" ||
    type === "JPEG" ||
    type === "png" ||
    type === "PNG" ||
    type === "gif"
  ) {
    return true;
  } else {
    return false;
  }
};

const isDoc = (type) => {
  if (
    type === "pdf" ||
    type === "xls" ||
    type === "xlsx" ||
    type === "ppt" ||
    type === "pptx" ||
    type === "doc" ||
    type === "docx" ||
    type === "csv" ||
    type === "txt"
  ) {
    return true;
  } else {
    return false;
  }
};

const percentage = (current, total) => {
  let val = current / total;
  val = val * 100;
  val = val.toFixed(2);
  val = Number(val);
  return val;
};

const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};

const pastItems = (items) => {
  const yesterday = new Date((new Date()).valueOf() - 1000*60*60*24);
  return items.filter(({ start_date }) => new Date(start_date) < yesterday);
}

const upcomingItems = (items) => {
  const yesterday = new Date((new Date()).valueOf() - 1000*60*60*24);
  return items.filter(({ start_date }) => new Date(start_date) >= yesterday);
}

const displayDate = (d) => {
  const date = new Date(d);
  if(!date) return null;
  return date.toDateString();
}

const getQR = (item) => {
  return `https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=${item}&choe=UTF-8`;
}

const sortDate = (items, options) => {
  const x_options = { date_to_sort: 'start_date', ...options }
  return items.sort(
    (itemA, itemB) => Number(new Date(itemA[x_options?.date_to_sort])) - Number(new Date(itemB[x_options?.date_to_sort])),
  )
}

const orderId = (length = 14) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

module.exports = {
  slug,
  code,
  guid,
  toUnique,
  removeItem,
  requiredFields,
  isDoc,
  isImage,
  getEXT,
  percentage,
  asyncForEach,
  pastItems,
  upcomingItems,
  displayDate,
  getQR,
  sortDate,
  orderId
};
