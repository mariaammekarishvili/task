// components/UserRegistrationForm.tsx
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../Button/Button";
import { addRole, addUser } from "@/app/api/v1/apiClient";
import { roleValidationSchema } from "@/util/validationSchema";

const RoleRegistrationForm: React.FC = () => {
  const permissionsData = {
    users: [
      { id: 1, key: "add", name: "მომხმარებლის დამატება", value: false },
      { id: 2, key: "delete", name: "მომხმარებლის წაშლა", value: false },
      { id: 3, key: "update", name: "მომხმარებლის რედაქტირება", value: false },
      { id: 4, key: "readOnly", name: "მხოლოდ დათვალიერება", value: false },
    ],
  };

  return (
    <div className="max-w-[751px] mx-auto">
      <Formik
        initialValues={{
          name: "",
          description: "",
          permissions: {
            users: [4],
            tabs: [],
          },
        }}
        validationSchema={roleValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          addRole(values);
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
                <label key={permission.id}>
                  <Field
                    type="checkbox"
                    name={`permissions.users[${permission.id}]`}
                    checked={formik.values.permissions.users.includes(
                      permission.id
                    )}
                    className="mr-2"
                    onChange={(e: any) => {
                      const isChecked = e.target.checked;
                      if (isChecked) {
                        formik.setFieldValue("permissions.users", [
                          ...formik.values.permissions.users,
                          permission.id,
                        ]);
                      } else {
                        formik.setFieldValue(
                          "permissions.users",
                          formik.values.permissions.users.filter(
                            (id) => id !== permission.id
                          )
                        );
                      }
                      permission.value = isChecked; // Update value property
                    }}
                  />
                  {permission.name}
                </label>
              ))}
            </div>
            <div className="relative left-[-20px] mix-h-[80px] flex w-[calc(100%+42px)] justify-end p-4 md:p-5 rounded-b border-t border-[#C9D0E1]">
            <Button type="primary">შენახვა</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RoleRegistrationForm;
