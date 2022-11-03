import * as yup from "yup";

export const registerSchema = yup.object({
  reg_email: yup
    .string()
    .email("Email should be valid")
    .required("Email is required"),

  name: yup.string().required("Full name is required"),

  phone: yup.string().required("Phone Number is required"),

  reg_password: yup
    .string()
    .min(6, "Password should be a minimum of 6 characters")
    .required("Password is required"),
});
