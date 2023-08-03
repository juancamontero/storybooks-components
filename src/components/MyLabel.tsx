import "./myLabel.css";

export interface MyLabelProps {
  /**
   * Label to display in the component
   */
  label: string;

  /**
   * Size of the label
   */
  size?: "normal" | "h1" | "h2" | "h3";

  /**
   * Change to capitalize the label
   **/
  capitalize?: boolean;

  /**
   * Color of the label
   **/
  color?: "primary" | "secondary" | "tertiary";

  /**
   * Custom label color
   */
  fontColor?: string;

  /**
   * Custom background color
   */
  backgroundColor?: string;
}

export const MyLabel = ({
  label = "no label",
  size = "normal",
  capitalize = false,
  color = "primary",
  fontColor,
  backgroundColor = "transparent",
}: MyLabelProps) => {
  return (
    <span
      className={` ${size} text-${color} label`}
      style={{ color: `${fontColor}`, backgroundColor }}
    >
      {capitalize ? label.toUpperCase() : label}
    </span>
  );
};

export default MyLabel;