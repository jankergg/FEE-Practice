import React, { InputHTMLAttributes } from "react";

interface InputWithLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: string;
  label: string;
}
const InputWithLabel: React.FC<InputWithLabelProps> = ({ id, type, label, ...rest }) => {
  return (
    <label htmlFor={id} className='flex flex-1'>
      <input type={type} name={id} {...rest} className='flex-1 mr-2 border border-yellow-500 rounded p-2 outline-none' />
    </label>
  );
};

export default InputWithLabel;
