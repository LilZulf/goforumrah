"use client"

import { CSSProperties, InputHTMLAttributes } from "react";
import '../sass/phonenumberinput.scss'

interface PhoneNumberInputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    name: string;
    placeholder?: string;
    label: string;
    value?: string;
    style?: CSSProperties;
    classNameInput?: string;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = (params: PhoneNumberInputProps, ...props) => {
    return (
        <div className="mb-4">
            <label
                htmlFor={params.id}
                className="form-label fw-medium text-secondary"
                style={{ fontSize: '14px' }}>
                {params.label}
            </label>
            <br></br>
            <div className="form-group ">
                <span className="border-end country-code px-3">+62</span>
                <input
                    type={'number'}
                    name={params.name}
                    className={`form-control  ${params.classNameInput}`}
                    id={params.id}
                    style={params.style}
                    placeholder={params.placeholder}
                    min={1}
                    {...props}
                />
            </div>

        </div>
        // <div className="container mt-2">
        //     <div className="col-md-6">
        //         <p>Mobile</p>
        //         <div className="form-group mt-2 d-inline-block">
        //             <span className="border-end country-code px-2">+60</span>
        //             <input type="text" className="form-control" id="ec-mobile-number" aria-describedby="emailHelp" placeholder={'1234213'} />
        //         </div>
        //     </div>
        // </div>

    )
}

export default PhoneNumberInput