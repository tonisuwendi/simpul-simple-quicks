'use client';

import React from 'react';
import { Flex } from '@mantine/core';
import { Search } from '@mui/icons-material';

const Navbar: React.FC = () => (
  <Flex align="center" className="w-full h-[58px] bg-[#4F4F4F] px-6">
    <form className="relative">
      <Search className="text-primary-graphite absolute" />
      <input type="text" className="outline-none bg-transparent h-full pl-8 text-primary-graphite" />
    </form>
  </Flex>
);

export default Navbar;
