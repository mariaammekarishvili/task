// components/UserRegistrationForm.tsx
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../Button/Button";
import { addRole, addUser } from "@/app/api/v1/apiClient";
import { roleValidationSchema } from "@/util/validationSchema";

const RoleRegistrationForm: React.FC = () => {
  const permissionsData = {
    users: [
      { id: 1, key: "add", name: "მომხმარებლის დამატება" },
      { id: 2, key: "delete", name: "მომხმარებლის წაშლა" },
      { id: 3, key: "update", name: "მომხმარებლის რედაქტირება" },
      { id: 4, key: "readOnly", name: "მხოლოდ დათვალიერება" },
    ],
  };

  return (
    <div className="max-w-[751px] mx-auto">
      <Formik
        initialValues={{
          name: "",
          description: "",
          permissions: {
            users: {
              add: false,
              delete: false,
              update: false,
              readOnly: false,
            },
          },
        }}
        validationSchema={roleValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
            console.log(values);
          addRole(values)
          setSubmitting(false);
        }}
      >
        {(formik) => (
          <Form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  სახელი
                </label>
                <Field
                  name="name"
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-sm text-red-600"
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  აღწერა
                </label>
                <Field
                  name="description"
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-sm text-red-600"
                />
              </div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                უფლებები
              </label>
              <label></label>
              {permissionsData.users.map((permission) => (
                <label key={permission.key}>
                  <Field
                    type="checkbox"
                    name={`permissions.users.${permission.key}`}
                    className="mr-2"
                  />
                  {permission.name}
                </label>
              ))}
            </div>
            <div className="relative left-[-20px] mix-h-[80px] flex w-[calc(100%+42px)] justify-end p-4 md:p-5 rounded-b border-t border-[#C9D0E1]">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RoleRegistrationForm;
