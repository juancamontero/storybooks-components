import "./myLabel.css";

interface MyLabelProps {
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
}

export const MyLabel = ({
  label = "no label",
  size = "normal",
  capitalize = false,
  color = "primary",
  fontColor,
}: MyLabelProps) => {
  return (
    <span className={` ${size} text-${color} label`} style={{color: `${fontColor}`}}>
      {capitalize ? label.toUpperCase() : label}
    </span>
  );
};
