import React from 'react';
import { Flex, Text } from '@mantine/core';

const StikerLabel: React.FC<{
  variant: string | 'important-asap' | 'offline-meeting' | 'virtual-meeting' | 'asap' | 'client-related' | 'self-task' | 'appointments' | 'court-related'
  className?: string
}> = ({ variant, className }) => {
  let text: string;
  let color: string;

  switch (variant) {
    case 'important-asap':
      text = 'Important ASAP';
      color = 'bg-stickers-frost';
      break;
    case 'offline-meeting':
      text = 'Offline Meeting';
      color = 'bg-stickers-peach';
      break;
    case 'virtual-meeting':
      text = 'Virtual Meeting';
      color = 'bg-stickers-cream';
      break;
    case 'asap':
      text = 'ASAP';
      color = 'bg-stickers-aqua';
      break;
    case 'client-related':
      text = 'Client Related';
      color = 'bg-stickers-sage';
      break;
    case 'self-task':
      text = 'Self Task';
      color = 'bg-stickers-periwinkle';
      break;
    case 'appointments':
      text = 'Appointments';
      color = 'bg-stickers-orchid';
      break;
    case 'court-related':
      text = 'Court Related';
      color = 'bg-[#9DD0ED]';
      break;
    default:
      text = '';
      color = '';
      break;
  }

  return (
    <Flex align="center" className={`h-[28px] rounded-[5px] px-3 ${color} ${className}`}>
      <Text className="text-[#4F4F4F] font-bold text-sm">{text}</Text>
    </Flex>
  );
};

export default StikerLabel;
