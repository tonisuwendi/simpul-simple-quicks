'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Divider, Flex, ScrollArea, Text, UnstyledButton } from '@mantine/core';

import SectionChat from './SectionChat';
import SearchInput from '../../SearchInput';
import { type IListChatHistory } from '../utils';

const DUMMY_CHATS: IListChatHistory[] = [
  {
    id: '1',
    title: '109220 - Naturalization',
    date: 'January 1, 2021 19:10',
    currentSender: 'Cameron Phillips',
    message: 'Please check this out!',
    newMessageIndicator: true
  },
  {
    id: '2',
    title: 'Jeanette Moraima Guaman Chamba (Hutto I-589) [Hutto Follow Up - Brief Service]',
    date: 'February 6, 2021 10:45',
    currentSender: 'Ellen',
    message: 'Hey, please read.',
    newMessageIndicator: false
  },
  {
    id: '3',
    title: '8405 - Diana SALAZAR MUNGUIA',
    date: 'March 15, 2021 14:30',
    currentSender: 'Cameron Phillips',
    message: 'I understand your initial concern and thats very valid, Elizabeth. But you have to understand that we are doing our best to help you out.',
    newMessageIndicator: false
  },
  {
    id: '4',
    title: 'FastVisa Support',
    date: 'March 15, 2021 14:30',
    currentSender: '',
    message: 'Hey there! Welcome to your inbox.',
    newMessageIndicator: false
  }
];

const InboxList: React.FC<{
  onOpenDetail: (chatId: string) => void
}> = ({ onOpenDetail }) => {
  const [searchValue, setSearchValue] = useState('');

  const newChatsList = DUMMY_CHATS.filter((chat) => chat.title.toLowerCase().includes(searchValue.toLowerCase()) || chat.message.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <Flex direction="column" gap={16} className="px-9 py-5">
      <SearchInput
        value={searchValue}
        onChange={(event) => { setSearchValue(event.currentTarget.value); }}
      />
      {newChatsList.length === 0 && (
        <Flex direction="column" align="center" className="mt-4">
          <Image
            src="/img/message.png"
            width={200}
            height={200}
            alt="Empty Inbox"
          />
          <Text className="font-bold mt-3 text-primary-slate">
            No messages found. Try searching for something else.
          </Text>
        </Flex>
      )}
      <ScrollArea className="h-[calc(100vh-330px)] mt-3">
        {newChatsList.map((chat, index) => (
          <UnstyledButton
            key={chat.id}
            className="w-full"
            onClick={() => { onOpenDetail(chat.id); }}
          >
            <SectionChat {...chat} />
            {index !== DUMMY_CHATS.length - 1 && <Divider my={20} />}
          </UnstyledButton>
        ))}
      </ScrollArea>
    </Flex>
  );
};

export default InboxList;
