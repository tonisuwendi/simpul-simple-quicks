import React from 'react';
import { Button as MantineButton, Flex, Menu } from '@mantine/core';
import { ExpandMore } from '@mui/icons-material';
import { useQuicksContext } from '@/hooks';

import Button from '../Button';

const MENU_ITEMS = ['My Tasks', 'Personal Errands', 'Urgent To-Do'];

const HeaderAction: React.FC<{
  filterValue: string
  onFilterChange: (filter: string) => void
}> = ({ filterValue, onFilterChange }) => {
  const { setIsAddNewTask } = useQuicksContext();

  return (
    <Flex align="center" justify="space-between">
      <Menu withArrow position="bottom-start" offset={4} arrowSize={14}>
        <Menu.Target>
          <MantineButton
            rightSection={<ExpandMore />}
            variant="outline"
            color="#828282"
            className="h-10 rounded-[5px]"
          >
            {filterValue}
          </MantineButton>
        </Menu.Target>
        <Menu.Dropdown w={200} className="border border-primary-silver">
          {MENU_ITEMS.map((item) => (
            <Menu.Item key={item} onClick={() => { onFilterChange(item); }}>
              {item}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
      <Button onClick={() => { setIsAddNewTask(true); }}>New Task</Button>
    </Flex>
  );
};

export default HeaderAction;
