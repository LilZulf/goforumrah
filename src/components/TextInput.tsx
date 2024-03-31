"use client"

import { CSSProperties, InputHTMLAttributes } from "react";

interface TextInputProps {
    id: string;
    name: string;
    placeholder?: string;
    inputType: string;
    label?: string;
    style?: CSSProperties;
    classNameInput?: string;
    restProps? : InputHTMLAttributes<HTMLInputElement>;
}

const TextInput: React.FC<TextInputProps> = (params: TextInputProps) => {


    return (
        <div className="mb-4">
            {params.label ??
                <label
                    htmlFor={params.id}
                    className="form-label fw-medium text-secondary"
                    style={{ fontSize: '14px' }}>
                    {params.label}
                </label>
            }

            <input
                type={params.inputType}
                name={params.name}
                className={`form-control  ${params.classNameInput}`}
                id={params.id}
                style={params.style}
                placeholder={params.placeholder}
                {...params.restProps}
            />
        </div>

    );
};

export default TextInput;