import React from 'react';
import { Flex } from '@mantine/core';

import InputText from '../../InputText';
import Button from '../../Button';

const Form: React.FC = () => (
  <Flex align="center" gap={12} className="absolute bottom-5 left-0 w-full px-5">
    <InputText placeholder="Type a new message" />
    <Button className="shrink-0">Send</Button>
  </Flex>
);

export default Form;
