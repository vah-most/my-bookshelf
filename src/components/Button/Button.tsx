import React from "react";
import { Button as MUIButton } from "@mui/material";

import "./Button.scss";

interface IButtonProps {
  children: JSX.Element | string;
  onClick: () => void;
  [prop: string]: any;
}

const Button = ({ children, onClick, ...rest }: IButtonProps) => {
  return (
    <MUIButton onClick={onClick} {...rest}>
      {children}
    </MUIButton>
  );
};

export default Button;
