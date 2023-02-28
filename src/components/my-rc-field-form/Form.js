import React from 'react';
import useForm from './useForm';
import FieldContext from './FieldContext';

export default function Form({form, children, onFinish, onFinishFailed}, ref) {
  const [ formInstance ] = useForm(form);

  formInstance.setCallback({
    onFinish,
    onFinishFailed
  })

  React.useImperativeHandle(ref, () => formInstance)
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        formInstance.submit();
      }}
    >
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  );
}