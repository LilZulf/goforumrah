import ButtonInput from "@/components/ButtonInput"
import Image from "next/image"

const page = () => {
    return (
        <>
            <div
                className="d-flex flex-column align-items-center mt-10"
            >
                <Image className="mb-5" src="/icons/Check.svg" alt="Check" width="48" height="48" />
                <h1 className="fw-semibold mb-2">Check your inbox</h1>
                <p className="text-secondary text-center mb-5">We just emailed instructions and a reset password link to <span className="fw-semibold">someone@mail.com</span>.<br></br>It might take a few minutes to arrive</p>
            </div>
            <ButtonInput
                buttonType="button"
                className="btn btn-primary fw-medium text-white py-2"
                style={{ fontSize: '14px' }}
                inline={true}
            >Open your email</ButtonInput>
        </>
    )
}

export default page