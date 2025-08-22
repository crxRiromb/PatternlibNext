import React from "react";
import { iconMap } from "../../../lit/src/components/icon/icon-map";
import styles from "./PlIcon.module.scss";

interface PlIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The name of the icon to display.
   * @default 'globe'
   */
  iconName?: string;

  /**
   * The alternative text for the icon.
   * @default ''
   */
  alt?: string;
}

export const PlIcon: React.FC<PlIconProps> = ({
  iconName = "globe",
  alt = "",
  className = "",
  ...rest
}) => {
  const src = iconMap[iconName] || iconMap.default;

  const wrapperClassName = `${styles.iconWrapper} ${className}`.trim();

  return (
    <span className={wrapperClassName} {...rest}>
      <img src={src} alt={alt} />
    </span>
  );
};
