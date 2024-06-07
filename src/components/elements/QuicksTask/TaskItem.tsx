import React, { useState } from 'react';
import moment from 'moment';
import { ActionIcon, Checkbox, Collapse, Flex, Menu, Text, Textarea } from '@mantine/core';
import { CalendarTodayOutlined, Edit, ExpandMore, MoreHoriz, Schedule } from '@mui/icons-material';
import { DateInput } from '@mantine/dates';

import InputText from '../InputText';

moment.updateLocale('en', {
  relativeTime: {
    future: '%s Left',
    past: '%s Ago',
    s: function (number, withoutSuffix, key, isFuture) {
      return '00:' + (number < 10 ? '0' : '') + number + ' minutes';
    },
    m: '01:00 minutes',
    mm: function (number, withoutSuffix, key, isFuture) {
      return (number < 10 ? '0' : '') + number + ':00' + ' minutes';
    },
    h: '1 Hour',
    hh: '%d Hours',
    d: '1 Day',
    dd: '%d Days',
    M: '1 Month',
    MM: '%d Months',
    y: '1 Year',
    yy: '%d Years'
  }
});

const TaskItem: React.FC<{
  title: string
  datetime: string
  description: string
  isCompleted: boolean
}> = ({ title, datetime, description, isCompleted }) => {
  const [isExpanded, setIsExpanded] = useState(!isCompleted);
  const [isEditDescription, setIsEditDescription] = useState(false);

  return (
    <Flex gap={16}>
      <Checkbox
        variant="outline"
        color="#828282"
        className={`shrink-0 ${title === '' ? 'mt-2.5' : 'mt-0.5'}`}
        checked={isCompleted}
      />
      <div className="w-full">
        <Flex align="flex-start" justify="space-between" gap={8}>
          {title === '' ? (
            <InputText placeholder="Type Task Title" w={300} />
          ) : (
            <Text className={`font-bold ${isCompleted ? 'text-primary-slate line-through' : 'text-[#4F4F4F]'}`}>{title}</Text>
          )}
          {datetime !== '' && (
            <Flex align="center" gap={12} className={`shrink-0 ${title === '' ? 'mt-2.5' : 'mt-0.5'}`}>
              {!isCompleted && (
                <Text className="text-sm text-indicator-crimson">{moment(datetime).fromNow()}</Text>
              )}
              <Text className="text-sm text-[#4F4F4F]">{moment(datetime).format('DD/MM/YYYY')}</Text>
            </Flex>
          )}
        </Flex>
        <Collapse in={isExpanded}>
          <Flex align="center" mt={16} gap={16}>
            <Schedule className="text-primary-blue text-[20px]" />
            <DateInput
              valueFormat="DD/MM/YYYY"
              placeholder="Set Date"
              rightSection={<CalendarTodayOutlined className="text-[#4F4F4F] text-[16px]" />}
              classNames={{
                input: 'h-10 rounded-[5px] border border-primary-slate'
              }}
              value={datetime === '' ? undefined : new Date(datetime)}
            />
          </Flex>
          <Flex mt={16} gap={16}>
            <ActionIcon variant="white" onClick={() => { setIsEditDescription(true); }}>
              <Edit className="text-primary-blue text-[20px]" />
            </ActionIcon>
            {isEditDescription ? (
              <Textarea
                autoFocus
                autosize
                value={description}
                className="w-full"
                onBlur={() => { setIsEditDescription(false); }}
                classNames={{
                  input: 'border border-primary-slate rounded-[5px]'
                }}
              />
            ) : (
              <Text className="text-sm text-[#4F4F4F]">{description === '' ? 'No Description' : description}</Text>
            )}
          </Flex>
        </Collapse>
      </div>
      <Flex gap={6} className="shrink-0">
        <ActionIcon variant="white" onClick={() => { setIsExpanded(!isExpanded); }}>
          <ExpandMore className={`text-primary-slate transition ${isExpanded ? 'rotate-180' : ''}`} />
        </ActionIcon>
        <Menu withArrow position="bottom-end" offset={0} arrowSize={14}>
          <Menu.Target>
            <ActionIcon variant="white">
              <MoreHoriz className="text-primary-slate" />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown w={130} className="border border-primary-silver">
            <Menu.Item color="red">
              Delete
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default TaskItem;
