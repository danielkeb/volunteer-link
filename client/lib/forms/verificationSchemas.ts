import * as Yup from "yup";

// Form input validation logic definitions
export const firstNameValidation = Yup.string()
  .min(2, "First name must be at least two characters long")
  .max(30, "First name must not be more than 30 characters long")
  .required("First name is required");

export const lastNameValidation = Yup.string()
  .min(2, "Last name must be at least two characters long")
  .max(30, "First name must not be more than 30 characters long")
  .required("Last name is required");

export const emailValidation = Yup.string()
  .email("Invalid email address")
  .required("Email address is required");

export const usernameValidation = Yup.string()
  .min(5, "Username must be at least 6 characters long")
  .max(20, "Username must not be more than 20 characters long")
  .required("User name is required");

export const locationValidation = Yup.string().required("Location is required");

export const passwordValidation = Yup.string()
  .min(6, "Password must be at least 6 characters long")
  .max(15, "Password must not be more than 15 characters long")
  .required("Password is required");

export const repeatPasswordValidation = Yup.string()
  .oneOf([Yup.ref("password")], "Passwords must match")
  .required("Repeat password is required");
