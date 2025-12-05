import * as yup from "yup"

export const loginSchema = yup
.object({
    email: yup.string().email("invalid email").required("email is required"),
    password: yup.string()
    .required("password is required")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).+$/, "password must include uppercase, lowercase, and a special character."),
}).required()