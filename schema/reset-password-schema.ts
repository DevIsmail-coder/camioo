import * as yup from "yup"

export const resetpasswordSchema = yup

.object({
        newPassword: yup.string()
        .required("password is required")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).+$/, "password must include uppercase, lowercase, and a special character."),
        newConfirmPassword: yup.string()
        .oneOf([yup.ref("password")], "passwords must match")
        .required("confirm password is required")
})