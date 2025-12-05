import * as yup from "yup"

export const forgotpasswordSchema = yup 

.object({
    email: yup.string().email("invalid email").required("email is required"),
})