import ButtonInput from "@/components/ButtonInput"
import TextInput from "@/components/TextInput"
import { FormEvent } from 'react'
import { setSignup, getCookies } from "@/lib/cookies";
import { redirect } from "next/navigation";
import { tree } from "next/dist/build/templates/app-page";


export default async function page() {
  const cookie = await getCookies('email');
  return (
    <div className="mt-7">
      <h1 className="fw-semibold">Create your partner account</h1>
      <p className="text-secondary">Create an account to list and manage your property.</p>
      <form action={async (formData: FormData) => {
        "use server";
        await setSignup(formData)
        redirect('/signup/contact-details')
      }} className="mt-4">
        <TextInput
          id="email"
          name="email"
          label="Email address"
          inputType="email"
          classNameInput="py-2 fs-6"
          placeholder="Enter your email address"
          restProps={{ required: true }}
        />
        <ButtonInput
          buttonType="submit"
          className="btn btn-primary fw-medium text-white py-2"
          style={{ fontSize: '14px' }}
        >Continue</ButtonInput>
      </form>
      <div className="d-grip gap-2 my-4" style={{ height: '2px', backgroundColor: '#f1f5f3' }}></div>
      <ButtonInput
        buttonType="button"
        className="btn btn-outline-primary fw-medium text-black py-2"
        style={{ fontSize: '14px' }}
      >Login</ButtonInput>
      <div className="d-grip mt-4">
        <p className="text-center">By signing in or creating an account, you agree with our
          <span className="fw-semibold text-primary"> Terms & Conditions</span> and <span className="fw-semibold text-primary">Privacy statment</span></p>
      </div>
    </div>
  )
}
