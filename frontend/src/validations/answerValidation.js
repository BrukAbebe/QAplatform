import * as Yup from 'yup';

export const answerValidationSchema = Yup.object().shape({
  content: Yup.string()
    .required('Answer is required')
    .min(5, 'Answer must be at least 5 characters')
    .max(3000, 'Answer must be less than 3000 characters'),
});
