import kaboom from "kaboom";
// import { scaleFactor } from "./constants";

export const k = kaboom({
  global: false,
  touchToMouse: true,
  canvas: document.getElementById("game"),
 // set to false once ready for production
});