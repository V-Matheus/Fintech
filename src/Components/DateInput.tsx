import React from 'react';

type IDateInput = React.ComponentProps<'input'> & {
  label: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const DateInput = ({ label, onChange, ...props }: IDateInput) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type="date" name={label} id={label} onChange={onChange} {...props} />
    </div>
  );
};

export default DateInput;
