import ButtonInput from "@/components/ButtonInput"
import PhoneNumberInput from "@/components/PhoneNumberInput"
import TextInput from "@/components/TextInput"
import Callout from "@/components/Callout"
import Image from "next/image"
import Link from "next/link"


export default function page() {
    return (
        <div className="mt-5">
            <Link
                href={'/signup/contact-details'}
            >
                <div className="d-inline-flex align-items-center mb-4 fw-semibold text-black">
                    <Image className="me-2" src="/icons/Arrow-Left.svg" alt="Logo" width="24" height="24" />
                    Back</div>
            </Link>
            <h1 className="fw-semibold">Create password</h1>
            <p className="text-secondary">Use a minimum of 30 characters, inculding uppercase letters, lowecase letters and numbers.</p>
            <form className="mt-4">
                <TextInput
                    id="password"
                    name="password"
                    label="Password"
                    inputType="password"
                    classNameInput="py-2 fs-6"
                    placeholder="Enter your password"
                />
                <TextInput
                    id="password-confirmation"
                    name="password-confirmation"
                    label="Password confirmation"
                    inputType="text"
                    classNameInput="py-2 fs-6"
                    placeholder="Enter your confirm password"
                />
                <ButtonInput
                    buttonType="button"
                    className="btn btn-primary fw-medium text-white py-2"
                    style={{ fontSize: '14px' }}
                >Create account</ButtonInput>
            </form>
            <div className="d-grip mt-4">
                <p className="text-center text-secondary">By signing in or creating an account, you agree with our
                    <span className="fw-semibold text-primary"> Terms & Conditions</span> and <span className="fw-semibold text-primary">Privacy statment</span></p>
            </div>
            <div className="p-7"></div>
        </div>
    )
}
