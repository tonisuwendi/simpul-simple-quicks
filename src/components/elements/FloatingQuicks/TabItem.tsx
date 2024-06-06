import React from 'react';
import { ActionIcon, Flex, Text, Transition } from '@mantine/core';
import { useQuicksContext } from '@hooks';
import { type IQuickTab } from './utils';
import { type QUICK_TAB_ENUM } from '@helpers/enum';

type TabItemProps = IQuickTab & {
  isOpenTab: boolean
};

const TabItem: React.FC<TabItemProps> = ({ name, title, activeClass, inactiveClass, icon, isOpenTab }) => {
  const { tabOpen, setTabOpen } = useQuicksContext();

  const handleToggleOpenTab = (thisName: QUICK_TAB_ENUM): void => {
    if (tabOpen === thisName) {
      setTabOpen(null);
    } else {
      setTabOpen(thisName);
    }
  };

  return (
    <Transition key={name} mounted={isOpenTab} transition="fade-left" duration={200}>
      {(styles) => (
        <Flex gap={12} direction="column" align="center" style={styles}>
          <Text className="text-primary-graphite font-bold">{title}</Text>
          <div className="relative">
            <ActionIcon
              variant="white"
              className={`w-[60px] h-[60px] z-10 ${tabOpen === name ? `${activeClass} !w-[68px] !h-[68px]` : inactiveClass} rounded-full shadow-quickbutton transition hover:scale-105`}
              onClick={() => { handleToggleOpenTab(name); }}
            >
              {icon}
            </ActionIcon>
            {tabOpen === name && <div className="bg-[#4F4F4F] w-[68px] h-[68px] absolute rounded-full top-0 -left-4" />}
          </div>
        </Flex>
      )}
    </Transition>
  );
};

export default TabItem;
