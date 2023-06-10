import type { ParentComponent } from "solid-js";
import styles from "./Button.css";

export const Button: ParentComponent<{ variant?: string }> = (props) => {
  return <button class={styles.button}>{props.children}</button>;
};
