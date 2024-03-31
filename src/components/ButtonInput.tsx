import React from 'react';

interface ButtonProps {
    className?: string;
    buttonType?: 'button' | 'reset' | 'submit' | undefined;
    style?: React.CSSProperties;
    children: React.ReactNode;
    inline?: boolean;
    restProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const ButtonInput: React.FC<ButtonProps> = (params: ButtonProps) => {
    const defaultStyles: React.CSSProperties = {
        borderRadius: '10px'
    };

    const mergedStyles: React.CSSProperties = { ...defaultStyles, ...params.style };
    return (
        <div className={`${params.inline ? 'col-4 mx-auto' : ''} d-grid gap-2`}>
            <button
                className={params.className}
                style={mergedStyles}
                type={params.buttonType}
                {...params.restProps} // Spread the restProps here
            >
                {params.children}
            </button>
        </div>

    );
};
export default ButtonInput;
