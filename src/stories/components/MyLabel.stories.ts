import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

const meta = {
  title: "UI/MyLabel",
  component: MyLabel,
  tags: ['autodocs'],
  argTypes: {
    color: { control: "select" },
    fontColor: { control: "color" },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Basic: Story = {
  args: {
    label: "Basic",
    size: "normal",
    capitalize: false,

  },
};
export const AllCaps: Story = {
  args: {
    label: "All Caps",
    capitalize: true,
  }
}
export const Secondary: Story = {
  args: {
    label: "Secondary",
    color: "secondary",
  }
}

export const Tertiary: Story = {
  args: {
    label: "Tertiary",
    size: "h2",
    color: "tertiary",
  }
}

export const CustomFontColor: Story = {
  args: {
    label: "Custom Font Color",
    size: "h1",
    capitalize: true,
    fontColor: "#5717ac",
  }
}
