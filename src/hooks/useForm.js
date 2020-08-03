import { useState } from 'react';

const useForm = (values) => {
  const [ value, setStateValue ] = useState(values);

  const handlerInput = (chave, valor) => {
    setStateValue({
      ...value,
      [chave]: valor
    });
  };

  const handlerChange = (input) => {
    handlerInput(
      input.target.getAttribute('name'),
      input.target.value
    );
  }

  const clearForm = () => {
    setStateValue(values);
  }

  return {
    value,
    handlerChange,
    clearForm
  }
};

export default useForm;