import React from "react";
import * as icons from "@mui/icons-material";

type IconName = keyof typeof icons;

type IconComponentProps = {
  icon: string;
  [key: string]: any;
};

export const IconComponent: React.FC<IconComponentProps> = ({
  icon,
  ...props
}) => {
  const IconComponent = icons[icon as IconName];

  if (!IconComponent) {
    const FallbackIcon = icons["HelpOutline"];
    return <FallbackIcon {...props} color="error" />;
  }

  return <IconComponent {...props} />;
};
