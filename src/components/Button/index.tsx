import type { ParentComponent } from 'solid-js';

export const Button: ParentComponent<{ variant?: string }> = (props) => {
  return (
    <button>{ props.children }</button>
  )
}
