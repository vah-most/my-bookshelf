import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import { TextField as MUITextField } from "@mui/material";

import "./TextField.scss";

interface ITextFieldProps {
  className?: string;
  [prop: string]: any;
}

const TextField = ({
  className,
  size = "small",
  ...otherProps
}: ITextFieldProps) => {
  return (
    <StyledEngineProvider injectFirst>
      <MUITextField
        className={`textFieldView ${className}`}
        size={size}
        {...otherProps}
      />
    </StyledEngineProvider>
  );
};

export default TextField;
