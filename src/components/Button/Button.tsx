import React from "react";
import { Button as MUIButton } from "@mui/material";

import "./Button.scss";

interface IButtonProps {
  children: JSX.Element | string;
  onClick: () => void;
  [prop: string]: any;
}

const Button = ({ children, className, onClick, ...rest }: IButtonProps) => {
  return (
    <MUIButton
      onClick={onClick}
      className={`button__container ${className}`}
      {...rest}
    >
      {children}
    </MUIButton>
  );
};

export default Button;
