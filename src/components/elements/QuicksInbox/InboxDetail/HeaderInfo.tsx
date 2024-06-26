import React from 'react';
import { ActionIcon, Divider, Flex, Skeleton, Text } from '@mantine/core';
import { ArrowBack, Close } from '@mui/icons-material';
import { useQuicksContext } from '@/hooks';

const HeaderInfo: React.FC<{
  title: string
  onBack: () => void
}> = ({ title, onBack }) => {
  const { setTabOpen } = useQuicksContext();

  return (
    <>
      <Flex align="center" justify="space-between" className="h-[75px] px-9" gap={12}>
        <Flex align="center" gap={16}>
          <ActionIcon variant="white" color="black" onClick={onBack}>
            <ArrowBack />
          </ActionIcon>
          <div>
            {title ? <Text className="font-bold text-primary-blue">{title}</Text> : <Skeleton width={150} height={20} />}
            <Text className="text-xs mt-0.5">3 Participants</Text>
          </div>
        </Flex>
        <ActionIcon
          variant="white"
          color="black"
          onClick={() => { setTabOpen(null); }}
        >
          <Close />
        </ActionIcon>
      </Flex>
      <Divider />
    </>
  );
};

export default HeaderInfo;
