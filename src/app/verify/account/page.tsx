import ButtonInput from "@/components/ButtonInput"
import Image from "next/image"

const page = () => {
  return (
    <>
      <div
        className="d-flex flex-column align-items-center mt-10"
      >
        <Image className="mb-5" src="/icons/Check.svg" alt="Check" width="48" height="48" />
        <h1 className="fw-semibold mb-2">Verify your email address</h1>
        <p className="text-secondary text-center mb-5">We sent you an email with a verification link to <span className="fw-semibold">someone@mail.com</span>. To <br></br>confirm your account please follow the link in the email we just sent.</p>
      </div>
      <ButtonInput
          buttonType="button"
          className="btn btn-primary fw-medium text-white py-2"
          style={{ fontSize: '14px' }}
          inline={true}
        >Create account</ButtonInput>
    </>
  )
}

export default page