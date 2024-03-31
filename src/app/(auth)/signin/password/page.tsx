import ButtonInput from "@/components/ButtonInput"
import TextInput from "@/components/TextInput"
import colors from '../../colors.module.scss'

export default function page() {
  return (
    <div className="mt-7">
      <h1 className="fw-semibold">Enter your password</h1>
      <p className="text-secondary">Enter your password for <span className="fw-semibold" style={{ color: colors.blueWhale }}>someone@mail.com</span> </p>
      <form className="mt-4">
        <TextInput
          id="password"
          name="password"
          label="Password"
          inputType="password"
          classNameInput="py-2 fs-6"
          placeholder="Enter your password"
        />
        <ButtonInput
          buttonType="button"
          className="btn btn-primary fw-medium text-white py-2"
          style={{ fontSize: '14px' }}
        >Continue</ButtonInput>
      </form>
      <div className="d-grip mt-4">
        <p className="text-center">By signing in or creating an account, you agree with our
          <span className="fw-semibold text-primary"> Terms & Conditions</span> and <span className="fw-semibold text-primary">Privacy statment</span></p>
      </div>
    </div>
  )
}
