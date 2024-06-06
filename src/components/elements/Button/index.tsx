import React from 'react';
import { type ButtonProps, Button as MantineButton } from '@mantine/core';

const Button: React.FC<ButtonProps> = ({ className, ...rest }) => (
  <MantineButton
    size="md"
    className={`bg-primary-blue h-10 rounded-[5px] border-[1px] border-primary-blue px-4 transition hover:opacity-80 ${className}`}
    {...rest}
  />
);

export default Button;
