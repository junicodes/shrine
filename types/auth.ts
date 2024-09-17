import { Dispatch, SetStateAction } from "react"

//Directory - components/auth/FormSignUp - State
export type FormPayload_SignUp = {
    first_name: string,
    last_name: string,
    email: string,
    location: string,
    password: string,
    terms_and_aggrement: boolean
}

//Directory - components/auth/FormSignIn - State
export type FormPayload_SignIn = {
    email: string,
    password: string,
}

//Directory - Props -- components/auth/SignUp | components/auth/FormSignup
export type SignUpProps = {
    setCurrent: Dispatch<SetStateAction<string>>
}

//Directory - Props -- components/auth/SignIn
export type SignInProps = {
    setCurrent: Dispatch<SetStateAction<string>>
}

export type FormPayload_Post = {
    description: string,
    type: string,
    tag: string[],
    file: any
}