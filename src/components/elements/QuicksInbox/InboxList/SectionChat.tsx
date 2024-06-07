import React from 'react';
import moment from 'moment';
import { Flex, Text } from '@mantine/core';
import { PersonOutline } from '@mui/icons-material';

import { type IListChatHistory } from '../utils';

const SectionChat: React.FC<IListChatHistory> = ({
  title, date, currentSender, message, newMessageIndicator
}) => (
  <Flex justify="space-between" className="relative cursor-pointer" gap={20}>
    <Flex gap={12}>
      <div className="relative w-[50px] shrink-0">
        <Flex align="center" justify="center" className="w-[34px] h-[34px] rounded-full bg-primary-blue absolute top-0 left-4">
          {currentSender === '' ? (
            <Text className="text-white font-bold">{title[0]}</Text>
          ) : (
            <PersonOutline className="text-white text-xl" />
          )}
        </Flex>
        {currentSender !== '' && (
          <Flex align="center" justify="center" className="w-[34px] h-[34px] rounded-full bg-primary-silver">
            <PersonOutline className="text-black/50 text-xl" />
          </Flex>
        )}
      </div>
      <Flex direction="column">
        <Text className="text-base mb-1 font-bold text-primary-blue">{title}</Text>
        {currentSender !== '' && <Text className="text-sm font-bold text-[#4F4F4F]">{`${currentSender}:`}</Text>}
        <Text className="text-sm text-[#4F4F4F] line-clamp-1">{message}</Text>
      </Flex>
    </Flex>
    <Text className="text-sm text-primary-slate shrink-0">{moment(date).format('MMMM DD, YYYY HH:mm')}</Text>
    {newMessageIndicator && <div className="w-3 h-3 rounded-full bg-indicator-crimson absolute right-0 top-1/2" />}
  </Flex>
);

export default SectionChat;
