import ButtonInput from "@/components/ButtonInput"
import PhoneNumberInput from "@/components/PhoneNumberInput"
import TextInput from "@/components/TextInput"
import Callout from "@/components/Callout"
import Image from "next/image"
import Link from "next/link"
import { getCookies, setSignup, getAllCookies } from "@/lib/cookies"
import { redirect } from "next/navigation"


export default async function page() {
  const cookies = await getAllCookies();
  console.log(cookies);
  return (
    <div className="mt-5">
      <Link
        href={'/signup/create-account'}
      >
        <div className="d-inline-flex align-items-center mb-4 fw-semibold text-black">
          <Image className="me-2" src="/icons/Arrow-Left.svg" alt="Logo" width="24" height="24" />
          Back</div>
      </Link>
      <h1 className="fw-semibold">Contact details</h1>
      <p className="text-secondary">Create your partner account create an account to list and manage your property.</p>
      <form action={async (formData: FormData) => {
        "use server";
        await setSignup(formData)
        
      }} className="mt-4">
        <TextInput
          id="firstname"
          name="firstname"
          label="First name"
          inputType="text"
          classNameInput="py-2 fs-6"
          placeholder="Enter your first name"
          restProps={{required : true}}
        />
        <TextInput
          id="lastname"
          name="lastname"
          label="Last name"
          inputType="text"
          classNameInput="py-2 fs-6"
          placeholder="Enter your last name"
          restProps={{required : true}}
        />
        <TextInput
          id="username"
          name="username"
          label="Username"
          inputType="text"
          classNameInput="py-2 fs-6"
          placeholder="Enter your username"
          restProps={{required : true}}
        />
        <PhoneNumberInput
          id="phonenumber"
          name="phonenumber"
          label="Phone number"
          classNameInput="py-2 fs-6"
          placeholder="81234567890"
        />
        <Callout>
          <div className="d-flex align-items-center" style={{ fontSize: '12px' }}>
            <Image className="me-2" src="/icons/Info.svg" alt="Logo" width="24" height="24" />
            We'll text two factor authentication code to this number when you sign in.
          </div>

        </Callout>
        <ButtonInput
          buttonType="submit"
          className="btn btn-primary fw-medium text-white py-2"
          style={{ fontSize: '14px' }}
        >Continue</ButtonInput>
      </form>
      <div className="d-grip mt-4">
        <p className="text-center text-secondary">By signing in or creating an account, you agree with our
          <span className="fw-semibold text-primary"> Terms & Conditions</span> and <span className="fw-semibold text-primary">Privacy statment</span></p>
      </div>
      <div className="p-7"></div>
    </div>
  )
}
