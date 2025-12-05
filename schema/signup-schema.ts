import * as yup from "yup"

export const signupSchema = yup
.object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("invalid email").required("email is required"),
    password: yup.string()
    .required("password is required")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).+$/, "password must include uppercase, lowercase, and a special character."),
    confirmPassword: yup.string()
    .oneOf([yup.ref("password")], "passwords must match")
    .required("confirm password is required")
}).required()