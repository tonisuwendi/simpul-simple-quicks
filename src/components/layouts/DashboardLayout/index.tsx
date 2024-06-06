import React from 'react';
import { Flex } from '@mantine/core';
import { FloatingQuicks } from '@components/elements';

import SideBar from './SideBar';
import Navbar from './Navbar';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Flex>
    <SideBar />
    <main className="w-full">
      <Navbar />
      {children}
      <FloatingQuicks />
    </main>
  </Flex>
);

export default DashboardLayout;
