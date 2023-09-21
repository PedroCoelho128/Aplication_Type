// InputFatec.tsx
import React from 'react';

interface InputFatecProps {
  initialValue?: string;
  type?: string;
  customPlaceholder?: string;
  id?: string; // Adicionamos 'id' como opcional
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  value?: string; // Adicionamos 'value' ao InputFatecProps
}

const InputFatec: React.FC<InputFatecProps> = ({
  type = 'text',
  customPlaceholder = 'Insira seu texto aqui',
  id,
  onChange,
  required = false,
  value = '',
}) => {
  return (
    <input
      type={type}
      placeholder={customPlaceholder}
      value={value}
      style={{ color: 'red' }}
      id={id}
      onChange={onChange}
      required={required}
    />
  );
};

export default InputFatec;
