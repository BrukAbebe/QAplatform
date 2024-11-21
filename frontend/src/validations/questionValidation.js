import * as Yup from 'yup';

export const questionValidationSchema = Yup.object().shape({
  title: Yup.string()
    .required('Question title is required')
    .min(10, 'Title must be at least 10 characters long')
    .max(200, 'Title must be less than 200 characters'),
  description: Yup.string()
    .required('Description is required')
    .min(5, 'Description must be at least 20 characters long')
    .max(5000, 'Description must be less than 5000 characters'),
});
