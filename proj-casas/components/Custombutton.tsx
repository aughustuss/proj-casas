import {styled, Button, ButtonProps} from '@mui/material'
type CustomButtonProps = ButtonProps & {
    color?: string;
    backgroundColor?: string;
    width?: string;
};

const CustomButton : React.FC<CustomButtonProps> = ({
    color,
    backgroundColor,
    width,
    children, 
    ...rest
}) => {
    return (
        <Button style={{color, width, backgroundColor}} {...rest}>
            {children}
        </Button>
    )
}