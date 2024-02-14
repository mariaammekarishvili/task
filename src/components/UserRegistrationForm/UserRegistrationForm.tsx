// components/UserRegistrationForm.tsx
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import validationSchema from "@/util/validationSchema";
import Button from "../Button/Button";
import { addUser } from "@/app/api/v1/apiClient";

const UserRegistrationForm: React.FC = () => {  
  return (
    <div className="max-w-[751px] mx-auto">
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          role: "",
          position: "",
          email: "",
          phone: "",
          agency:'',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          addUser(values);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
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
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                გვარი
              </label>
              <Field
                name="lastName"
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-sm text-red-600"
              />
            </div>
            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700"
              >
                როლი
              </label>
              <Field
                name="role"
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3"
              />
              <ErrorMessage
                name="role"
                component="div"
                className="text-sm text-red-600"
              />
            </div>
            <div>
              <label
                htmlFor="agency"
                className="block text-sm font-medium text-gray-700"
              >
                დეპარტამენტი
              </label>
              <Field
                name="agency"
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3"
              />
              <ErrorMessage
                name="agency"
                component="div"
                className="text-sm text-red-600"
              />
            </div>
            <div>
              <label
                htmlFor="position"
                className="block text-sm font-medium text-gray-700"
              >
                პოზიცია
              </label>
              <Field
                name="position"
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3"
              />
              <ErrorMessage
                name="position"
                component="div"
                className="text-sm text-red-600"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                ელ. ფოსტა
              </label>
              <Field
                name="email"
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-sm text-red-600"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                ტელეფონი
              </label>
              <Field
                name="phone"
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-sm text-red-600"
              />
            </div>
          </div>
          <div className="relative left-[-20px] mix-h-[80px] flex w-[calc(100%+42px)] justify-end p-4 md:p-5 rounded-b border-t border-[#C9D0E1]">
            <Button type="primary">შენახვა</Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default UserRegistrationForm;
