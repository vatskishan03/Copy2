import React from "react";
const shapes = {
    round: "rounded-[25px]",
    square: "rounded-[0px]",
} as const;
const variants = {
    fill: {
},
        blue_gray_100: "bg-blue_gray-100 text-black-900_03",
}   as const;
    const sizes =
{
        md: "h-[93px] px-6 text-5x1",
        sm: "h-[82px] px-6 text-5x1",
        xl: "h-[165px] px-[35px] text-[40px]",
        lg: "h-[99px] px-[35px] text-[40px]",
        xs: "h-[76px] px-[35px] text-5x1",
} as const;
type ButtonProps = Omit<
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
"onclick"
> &
Partial<{
    className: string;
    leftIcon: React. ReactNode;
    rightIcon: React. ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
}>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
    children,
    className = " ",
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size = "md",
    color = "blue_gray_100",
    ...restProps
}) => {
    return (
        <button
            className={`${className} flex flex-row items-center justify-center text-center cursor-pointer text-black-900_03 bg-blue_gray-100 ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
            {...restProps}
        >
            {children}
        </button>
    );
};
export { Button };