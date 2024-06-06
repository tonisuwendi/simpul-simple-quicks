'use client';

import React from 'react';
import { Flex, Transition } from '@mantine/core';
import { FloatingQuicks, QuickContainer } from '@/components/elements';
import { useQuicksContext } from '@/hooks';

import SideBar from './SideBar';
import Navbar from './Navbar';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { tabOpen } = useQuicksContext();

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
