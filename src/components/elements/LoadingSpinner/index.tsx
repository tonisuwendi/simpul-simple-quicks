import React from 'react';
import Image from 'next/image';
import { Flex, Text } from '@mantine/core';

const LoadingSpinner: React.FC<{ label: string }> = ({ label }) => (
  <Flex direction="column" align="center" justify="center" gap={12} className="h-full">
    <Image src="/icons/loading.svg" alt="Loading" width={80} height={80} className="w-20 h-20 animate-spin" />
    <Text className="font-bold text-center text-[#4F4F4F]">{label}</Text>
  </Flex>
);

export default LoadingSpinner;
