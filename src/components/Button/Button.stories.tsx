import type { Meta, StoryObj } from "storybook-solidjs";

import { Button, buttonVariants } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    variant: { options: buttonVariants, control: { type: "radio" } },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/solid/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "Primary",
    label: "A Primary Button",
  },
};

export const Success: Story = {
  args: {
    variant: "Success",
    label: "A Success Button",
  },
};
