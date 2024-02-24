import React from 'react';

type InputFieldProps = {
  label: string,
  id: string,
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const InputField = ({ label, id, placeholder, value, onChange }: InputFieldProps): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className='form-control'>
      <label className='input-label' htmlFor={id}>{label}</label>
      <input
        id={id}
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className='input-field'
      />
    </div>
  );
};

export default InputField;
