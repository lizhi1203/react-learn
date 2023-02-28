import React, { useRef } from 'react';

class FormStore {
  constructor() {
    this.store = {};
    this.fieldEntities = [];
    this.callbacks = {};
  }

  registerEntity = (entity) => {
    this.fieldEntities.push(entity);
    return () => {
      this.fieldEntities = this.fieldEntities.filter(item => item !== entity);
      delete this.store[entity.props.name];
    }
  }

  setFieldValue = () => {}

  setFieldsValue = (newStore) => {
    this.store = {
      ...this.store,
      ...newStore
    }
    this.fieldEntities.forEach(entity => {
      const { name } = entity.props;
      Object.keys(newStore).forEach(key => {
        if (key === name) {
          entity.onStoreChange()
        }
      })
    })
  }

  getFieldValue = (name) => {
    return this.store[name];
  }

  getFieldsValue = () => {
    return this.store;
  }

  setCallback = (callback) => {
    this.callbacks = {
      ...this.callbacks,
      callback
    }
  }

  validate = () => {
    let err = [];
    this.fieldEntities.forEach(entity => {
      const { rules, name } = entity;
      let rule = rules && rules[0]
      const value = this.getFieldValue(name);
      if (rule && rule.required && (value === undefined || value === '')) {
        err.push({
          [name]: rule.message,
          value
        })
      }
    })
    return err;
  }

  submit = () => {
    const { onFinish, onFinishFailed } = this.callbacks;
    const err = this.validate()
    if (err.length === 0) {
      onFinish(this.getFieldsValue())
    } else {
      onFinishFailed(err)
    }
  }

  getForm = () => {
    return {
      registerEntity: this.registerEntity,
      getFieldsValue: this.getFieldsValue,
      getFieldValue: this.getFieldValue,
      setFieldsValue: this.setFieldsValue,
      setFieldValue: this.setFieldValue,
      setCallback: this.setCallback,
      submit: this.submit
    }
  }
}
export default function useForm(form) {
  let formRef = useRef()
  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      const formStore = new FormStore()
      formRef.current = formStore.getForm()
    }
  }
  return [formRef.current]
}