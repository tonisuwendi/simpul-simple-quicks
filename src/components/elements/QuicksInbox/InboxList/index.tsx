'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Divider, Flex, ScrollArea, Text, UnstyledButton } from '@mantine/core';

import SectionChat from './SectionChat';
import SearchInput from '../../SearchInput';
import LoadingSpinner from '../../LoadingSpinner';
import { type IListChatHistory } from '../utils';
import { getLocalStorage } from '@/helpers/storage';
import { STORAGE_ENUM } from '@/helpers/enum';

const InboxList: React.FC<{
  onOpenDetail: (chatId: string) => void
}> = ({ onOpenDetail }) => {
  const inboxStorage = getLocalStorage(STORAGE_ENUM.INBOX) || '[]';
  const inboxStorageParsed: IListChatHistory[] = JSON.parse(inboxStorage);

  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setLoading] = useState(true);

  const newChatsList = inboxStorageParsed.filter((chat) => chat.title.toLowerCase().includes(searchValue.toLowerCase()) || chat.message.toLowerCase().includes(searchValue.toLowerCase()));

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <Flex direction="column" gap={16} className="px-9 py-5 h-full">
      <SearchInput
        value={searchValue}
        onChange={(event) => { setSearchValue(event.currentTarget.value); }}
      />
      {isLoading ? <LoadingSpinner label="Loading Chats..." /> : (
        <>
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
                {index !== newChatsList.length - 1 && <Divider my={20} />}
              </UnstyledButton>
            ))}
          </ScrollArea>
        </>
      )}
    </Flex>
  );
};

export default InboxList;
