import React from "react";
import styles from './FormControl.module.css';

export const Textarea = ({input, meta: { touched, error}, label}) => {
  const hasError = touched && error;
  return(
    <div className={`${styles.formControl} ${(hasError ? styles.error : '')}`}>
      <textarea {...input} placeholder={label} />
      {hasError &&
        <span>{error}</span>
      }
    </div>
  )
};

export const Input = ({input, type, meta: { touched, error}, label}) => {
  const hasError = touched && error;
  return(
    <div className={`${styles.formControl} ${(hasError ? styles.error : '')}`}>
      <input {...input} placeholder={label} type={type} />
      {hasError &&
      <span>{error}</span>
      }
    </div>
  )
};
