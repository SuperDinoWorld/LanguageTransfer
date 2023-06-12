import { style } from "@vanilla-extract/css";

export const button = style({
  color: "white",
});

export const buttonVariantPrimary = style({
  backgroundColor: "blue",
});

export const buttonVariantSuccess = style({
  backgroundColor: "green",
});

export default {
  button,
  buttonVariantPrimary,
  buttonVariantSuccess,
};
