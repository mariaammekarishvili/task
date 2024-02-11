import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required'),
  lastName: Yup.string()
    .required('Last name is required'),
  agency: Yup.string()
    .required('Agency is required'),
  position: Yup.string()
    .required('Position is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must be only digits")
    .min(10, 'Phone number must be at least 10 digits long')
    .required('Phone number is required'),
  createdAt: Yup.string()
    .required('Creation date is required'),
  updatedAt: Yup.string()
    .required('Update date is required'),
});

export default validationSchema;
