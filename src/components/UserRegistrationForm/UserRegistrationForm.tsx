// components/UserRegistrationForm.tsx
import React from 'react';
import { Formik, Form, Field } from 'formik';
import validationSchema from '@/util/validationSchema';


// Initial form values
const initialValues = {
    name: '', lastName: '', agency: '', position: '', email: '', phone: '', createdAt: '', updatedAt: ''
};

const UserRegistrationForm: React.FC = () => {
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ errors, touched }) => (
        <Form className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Personal Details</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <Field name="name" type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" />
                {errors.name && touched.name ? <div className="text-sm text-red-600">{errors.name}</div> : null}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <Field name="email" type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" />
                {errors.email && touched.email ? <div className="text-sm text-red-600">{errors.email}</div> : null}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">Security Details</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <Field name="password" type="password" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" />
                {/* {errors.password && touched.password ? <div className="text-sm text-red-600">{errors.password}</div> : null} */}
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <Field name="confirmPassword" type="password" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" />
                {/* {errors.confirmPassword && touched.confirmPassword ? <div className="text-sm text-red-600">{errors.confirmPassword}</div> : null} */}
              </div>
            </div>
          </div>

          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default UserRegistrationForm;
