import React from 'react';
import { TextInput, type TextInputProps } from '@mantine/core';

const InputText: React.FC<TextInputProps & { classNameInput?: string }> = ({ classNameInput, ...rest }) => (
  <TextInput
    className="w-full"
    classNames={{
      input: `border border-primary-slate rounded-[5px] h-10 px-4 focus:ring-1 focus:ring-primary-blue focus:border-primary-blue transition ${classNameInput}`
    }}
    {...rest}
  />
);

export default InputText;
