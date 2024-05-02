import { FieldError, UseFormRegister } from 'react-hook-form';

import { FormData } from '@validations/contactSchema';

export type FormFieldProps = {
  type: string;
  label: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
};

export type ValidFieldNames = 'fullname' | 'email' | 'message';
