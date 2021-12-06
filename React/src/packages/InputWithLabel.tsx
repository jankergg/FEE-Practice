import React, { InputHTMLAttributes } from "react";

interface InputWithLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: string;
  label: string;
}
const InputWithLabel: React.FC<InputWithLabelProps> = ({ id, type, label, ...rest }) => {
  return (
    <label htmlFor={id}>
      <input type={type} name={id} {...rest} />
    </label>
  );
};

export default InputWithLabel;
