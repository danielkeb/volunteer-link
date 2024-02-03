"use client";

import { SelectInput, TextInput } from "@/components/formElements";
import Button from "@/components/global/Button";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import {
  emailValidation,
  firstNameValidation,
  lastNameValidation,
  locationValidation,
  passwordValidation,
  repeatPasswordValidation,
  usernameValidation,
} from "../../lib/forms/verificationSchemas";

export default function SignUpForm({ locations }: { locations: object[] }) {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        locations: "",
        password: "",
        repeatPassword: "",
      }}
      validationSchema={Yup.object({
        firstName: firstNameValidation,
        lastName: lastNameValidation,
        email: emailValidation,
        username: usernameValidation,
        location: locationValidation,
        password: passwordValidation,
        repeatPassword: repeatPasswordValidation,
      })}
      onSubmit={() => {}}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-2">
          <div className="flex flex-grow gap-4 xl:flex-row">
            <TextInput
              label="First Name"
              props={{
                name: "firstName",
                type: "text",
                autoComplete: "off",
              }}
            />

            <TextInput
              label="Last Name"
              props={{
                name: "lastName",
                type: "text",
                autoComplete: "off",
              }}
            />
          </div>

          <div className="flex flex-col gap-4 xl:flex-row">
            <TextInput
              label="Email"
              props={{
                name: "email",
                type: "email",
                autoComplete: "off",
              }}
            />

            <TextInput
              label="Username"
              props={{
                name: "username",
                type: "text",
                autoComplete: "off",
              }}
            />
          </div>

          <SelectInput
            label="Location"
            props={{
              name: "location",
              type: "select",
            }}
          >
            <option>--Select your location--</option>
            {locations.map((location: any) => {
              return (
                <option key={location.id} value={location.id}>
                  {location.name}
                </option>
              );
            })}
          </SelectInput>

          <div className="flex flex-col gap-4 xl:flex-row">
            <TextInput
              label="Password"
              props={{
                name: "password",
                type: "password",
              }}
            />

            <TextInput
              label="Repeat Password"
              props={{
                name: "repeatPassword",
                type: "password",
              }}
            />
          </div>

          <Button
            disabled={isSubmitting}
            variant="filled"
            size="base"
            text="Sign Up"
          />
        </Form>
      )}
    </Formik>
  );
}
