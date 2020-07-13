import React from 'react';
import styles from "./FormControls.module.scss";
import { Field } from 'redux-form'

const FormControl = ({ input, meta: { touched, error }, children }) => {
  const hasError = touched && error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>
        {children}
      </div>
      {hasError && <span>"{error}</span>}
    </div>
  )
}

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const createField = (component, name, placeholder, type, autocomplete, onChange, value, validators) => (
  <Field component={component} name={name} placeholder={placeholder}
    type={type} autoComplete={autocomplete} onChange={onChange}
    value={value} validate={validators} />
)


