'use client';

import React, { useEffect } from 'react';
import { Flex, Transition } from '@mantine/core';
import { FloatingQuicks, QuickContainer } from '@/components/elements';
import { useQuicksContext } from '@/hooks';

import SideBar from './SideBar';
import Navbar from './Navbar';
import inboxJson from '@/data/inbox.json';
import { getLocalStorage, setLocalStorage } from '@/helpers/storage';
import { STORAGE_ENUM } from '@/helpers/enum';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { tabOpen } = useQuicksContext();

  useEffect(() => {
    const inboxStorage = getLocalStorage(STORAGE_ENUM.INBOX) || null;
    if (!inboxStorage) {
      setLocalStorage(STORAGE_ENUM.INBOX, JSON.stringify(inboxJson));
    }
  }, []);

  return (
    <Flex>
      <SideBar />
      <main className="w-full">
        <Navbar />
        {children}
        <Transition transition="fade" duration={150} mounted={tabOpen !== null}>
          {(styles) => <div style={styles}><QuickContainer /></div>}
        </Transition>
        <FloatingQuicks />
      </main>
    </Flex>
  );
};

export default DashboardLayout;
