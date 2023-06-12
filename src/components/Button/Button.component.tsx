import type { Component } from "solid-js";

import { mergeProps } from "solid-js";
import {
  button,
  buttonVariantPrimary,
  buttonVariantSuccess,
} from "./Button.css";

export const buttonVariants = ["Primary", "Success"] as const;
export type ButtonVariants = (typeof buttonVariants)[number];

type ButtonProps = {
  label: string;
  variant?: ButtonVariants;
};

const defaultProps: ButtonProps = {
  label: "Please provide a label",
  variant: "Primary",
};

const Button: Component<ButtonProps> = (props) => {
  const mergedProps = mergeProps(defaultProps, props);

  return (
    <button
      classList={{
        [button]: true,
        [buttonVariantPrimary]: mergedProps.variant === "Primary",
        [buttonVariantSuccess]: mergedProps.variant === "Success",
      }}
    >
      {mergedProps.label}
    </button>
  );
};

export { Button };
