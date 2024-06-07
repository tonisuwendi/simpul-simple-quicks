import React from 'react';
import { type ButtonProps, Button as MantineButton } from '@mantine/core';

const Button: React.FC<ButtonProps & {
  onClick?: () => void
}> = ({ className, onClick, ...rest }) => (
  <MantineButton
    size="md"
    className={`bg-primary-blue h-10 rounded-[5px] border-[1px] border-primary-blue px-4 transition hover:opacity-80 ${className}`}
    onClick={onClick}
    {...rest}
  />
);

export default Button;
