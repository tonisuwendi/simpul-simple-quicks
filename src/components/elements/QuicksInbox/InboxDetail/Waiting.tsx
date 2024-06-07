import React from 'react';
import Image from 'next/image';
import { Flex, Text } from '@mantine/core';

const Waiting: React.FC = () => (
  <Flex align="center" gap={12} className="bg-stickers-frost rounded-[5px] p-[10px]">
    <Image src="/icons/loading-blue.svg" alt="Loading" width={32} height={32} className='w-8 h-8 animate-spin' />
    <Text className="font-bold text-sm text-[#4F4F4F]">Please wait while we connect you with one of the team...</Text>
  </Flex>
);

export default Waiting;
