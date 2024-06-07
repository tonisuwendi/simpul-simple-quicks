'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ScrollArea } from '@mantine/core';
import { getLocalStorage, setLocalStorage } from '@/helpers/storage';
import { STORAGE_ENUM } from '@/helpers/enum';

import HeaderInfo from './HeaderInfo';
import Form from './Form';
import ChatList from './ChatList';
import LoadingSpinner from '../../LoadingSpinner';
import Waiting from './Waiting';
import { type IListChatItem, type IListChatHistory } from '../utils';

export interface IReplyMessage {
  name: string
  message: string
};

const InboxDetail: React.FC<{
  inboxId: string
  onBack: () => void
}> = ({ inboxId, onBack }) => {
  const viewport = useRef<HTMLDivElement>(null);
  const inboxStorage = getLocalStorage(STORAGE_ENUM.INBOX) || '[]';
  const inboxStorageParsed: IListChatHistory[] = JSON.parse(inboxStorage);

  const [replyMessage, setReplyMessage] = useState<IReplyMessage | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [inboxTitle, setInboxTitle] = useState<string>('');
  const [messagetList, setMessageList] = useState<IListChatItem[]>([]);
  const [isWaiting, setWaiting] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      const selectedInbox = inboxStorageParsed.find((chat) => chat.id === inboxId);
      setInboxTitle(selectedInbox?.title ?? '');
      setMessageList(selectedInbox?.messageLists ?? []);
      setWaiting(selectedInbox?.title === 'FastVisa Support');
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    if (messagetList.length > 0) {
      viewport.current?.scrollTo({ top: viewport.current?.scrollHeight });
    }
  }, [messagetList]);

  const handleSend = (message: string, replyMessage?: string): void => {
    const newMessageList = [...messagetList].map((chat) => ({ ...chat, isRead: true }));
    newMessageList.push({
      id: `chat-${newMessageList.length + 1}`,
      name: 'You',
      message,
      datetime: new Date().toISOString(),
      isRead: true,
      replyMessage: replyMessage ?? undefined
    });
    setMessageList(newMessageList);
    const selectedInbox = inboxStorageParsed.find((chat) => chat.id === inboxId);
    if (selectedInbox) {
      selectedInbox.messageLists = newMessageList;
      const newInboxStorage = inboxStorageParsed.map((chat) => (chat.id === inboxId ? selectedInbox : chat));
      setLocalStorage(STORAGE_ENUM.INBOX, JSON.stringify(newInboxStorage));
    }
  };

  const handleDelete = (id: string): void => {
    const newMessageList: IListChatItem[] = [...messagetList].filter((chat) => chat.id !== id);
    setMessageList(newMessageList);
    const selectedInbox = inboxStorageParsed.find((chat) => chat.id === inboxId);
    if (selectedInbox) {
      selectedInbox.messageLists = newMessageList;
      const newInboxStorage = inboxStorageParsed.map((chat) => (chat.id === inboxId ? selectedInbox : chat));
      setLocalStorage(STORAGE_ENUM.INBOX, JSON.stringify(newInboxStorage));
    }
  };

  return (
    <>
      <HeaderInfo title={inboxTitle} onBack={onBack} />
      {isLoading ? <LoadingSpinner label="Loading Chat..." /> : (
        <section className="p-5">
          <ScrollArea
            offsetScrollbars
            viewportRef={viewport}
            className={isWaiting ? 'h-[calc(100vh-455px)]' : 'h-[calc(100vh-400px)]'}
          >
            <ChatList
              messageLists={messagetList}
              onReplyMessage={setReplyMessage}
              onDeleteMessage={handleDelete}
            />
          </ScrollArea>
          {isWaiting && <Waiting />}
          <Form
            replyMessage={replyMessage}
            onCloseReply={() => { setReplyMessage(null); }}
            onSend={handleSend}
          />
        </section>
      )}
    </>
  );
};

export default InboxDetail;
