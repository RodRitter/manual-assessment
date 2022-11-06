import React, { MouseEventHandler } from "react";

type ButtonTypes = {
    className?: string;
    onClick: MouseEventHandler;
    children?: React.ReactNode;
};

const Button = ({ onClick, className, children }: ButtonTypes) => {
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
};

export default Button;
