import React from "react";
import  Button, {ButtonProps}  from "@mui/material/Button";

interface CustomButtonProps extends ButtonProps {
    className?:string;
};

const CustomButton: React.FC<CustomButtonProps> = ({className, ...props}) => {
    const TailwindClasses = className ? className : '';

    return (
        <Button {...props} className={TailwindClasses} />
    );
};

export default CustomButton;
