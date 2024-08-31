import { genres } from "@/services/tmdb";
import numeral from "numeral";

export const truncate = (paragraph = "", totalWords = 50) => {
  return paragraph.split(" ").slice(0, totalWords).join(" ") + "...";
};

// export const getYear = (str) => {
//   if (typeof str !== "string") return;
//   return str.slice(0, 4);
// };

export const getGenresById = (arr: number[]) => {
  if (Array.isArray(arr) && arr.length > 0) {
    return genres
      .filter((genre) => new Set(arr).has(genre.id))
      .map((genre) => genre.name)
      .slice(0, 3)
      .join(", ");
  }
  return;
};

// export const formatNumber = (num) => {
//   if (typeof num === "number") {
//     return numeral(num).format("$0,0");
//   }
//   return false;
// };

// // Get names from each object in array and return as string
// export const getNames = (arr) => {
//   if (Array.isArray(arr) && arr.length > 0) {
//     return arr.map((item) => item.name).join(", ");
//   }
//   return false;
// };
