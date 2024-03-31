import ButtonInput from "@/components/ButtonInput"
import TextInput from "@/components/TextInput"


export default function page() {
  return (
    <div className="mt-7">
      <h1 className="fw-semibold">Sign in to manage your property</h1>
      <p className="text-secondary">Create an account to list and manage your property.</p>
      <form className="mt-4">
        <TextInput
          id="email"
          name="email"
          label="Email address"
          inputType="email"
          classNameInput="py-2 fs-6"
          placeholder="Enter your email address"
        />
        <ButtonInput
          buttonType="button"
          className="btn btn-primary fw-medium text-white py-2"
          style={{ fontSize: '14px' }}
        >Continue</ButtonInput>
      </form>
      <div className="d-grip gap-2 my-4" style={{ height: '2px', backgroundColor: '#f1f5f3' }}></div>
      <ButtonInput
        buttonType="button"
        className="btn btn-outline-primary fw-medium text-black py-2"
        style={{ fontSize: '14px' }}
      >Create your partner account</ButtonInput>
      <div className="d-grip mt-4">
        <p className="text-center">By signing in or creating an account, you agree with our
          <span className="fw-semibold text-primary"> Terms & Conditions</span> and <span className="fw-semibold text-primary">Privacy statment</span></p>
      </div>
    </div>
  )
}
