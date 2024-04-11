'use client';
import React, { FC, ReactNode, ButtonHTMLAttributes } from 'react';
import './Button.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    buttonType: string;
    onClick: () => void;
    children: ReactNode;
    disabled: boolean;
}

const Button: FC<ButtonProps> = ({ buttonType = 'primary', onClick, children, disabled, ...props }) => {
    const className = `button button-${buttonType}`;

    return (
        <button className={className} onClick={onClick} disabled={disabled} {...props}>
            {children}
        </button>
    );
};

export default Button;