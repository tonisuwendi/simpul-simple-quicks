'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ActionIcon, Flex } from '@mantine/core';
import { CloseOutlined } from '@mui/icons-material';
import { useQuicksContext } from '@/hooks';

import TabItem from './TabItem';
import { QUICK_TAB } from './utils';

const FloatingQuicks: React.FC = () => {
  const [isOpenTab, setIsOpenTab] = useState(false);
  const { tabOpen, setTabOpen } = useQuicksContext();

  const selectedTab = QUICK_TAB.find((tab) => tab.name === tabOpen);
  const filteredTab = QUICK_TAB.filter((tab) => tab.name !== tabOpen);

  const handleToggleOpenTab = (): void => {
    if (isOpenTab) {
      setTabOpen(null);
      setIsOpenTab(false);
    } else {
      setIsOpenTab(true);
    }
  };

  return (
    <Flex align="flex-end" gap={26} direction="row-reverse" className="fixed bottom-7 right-7">
      <ActionIcon
        className="w-[68px] h-[68px] rounded-full shadow-quickbutton bg-primary-blue transition hover:bg-primary-blue hover:opacity-90 hover:scale-110"
        onClick={handleToggleOpenTab}
      >
        {isOpenTab ? (
          <CloseOutlined className="text-3xl" />
        ) : (
          <Image
            src="/icons/cloud-lightning.svg"
            alt="Quicks Open"
            width={30}
            height={30}
            className="h-8 w-[18px]"
          />
        )}
      </ActionIcon>
      {!(selectedTab == null) && (
        <TabItem
          {...selectedTab}
          isOpenTab={isOpenTab}
        />
      )}
      {filteredTab.map((tab) => (
        <TabItem
          key={tab.name}
          {...tab}
          isOpenTab={isOpenTab}
        />
      ))}
    </Flex>
  );
};

export default FloatingQuicks;
