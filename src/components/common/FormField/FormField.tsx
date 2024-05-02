import classNames from 'classnames';

import useStyles from './styles';
import { FormFieldProps } from './types';

const FormField = ({ type, placeholder, name, register, error, label }: FormFieldProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={classNames(classes.input, error ? classes.inputError : '')}
      />
      <label htmlFor={name} aria-label={name} className={classNames(classes.label, error ? classes.labelError : '')}>
        {label}
      </label>
      {error && <span className={classes.error}>{error.message}</span>}
    </div>
  );
};

export default FormField;
