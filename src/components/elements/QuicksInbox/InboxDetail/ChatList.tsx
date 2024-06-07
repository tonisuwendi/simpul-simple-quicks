import React, { Fragment } from 'react';
import moment from 'moment';
import { Divider, Flex, Text } from '@mantine/core';

import ChatItem from './ChatItem';
import { type IListChatItem } from '../utils';
import { type IReplyMessage } from '.';

const ChatList: React.FC<{
  messageLists: IListChatItem[]
  onReplyMessage: (replyMessage: IReplyMessage | null) => void
  onDeleteMessage: (id: string) => void
}> = ({ messageLists, onReplyMessage, onDeleteMessage }) => {
  let isShowRead = false;

  return (
    <Flex direction="column" gap={10}>
      {messageLists.map((chat) => {
        const isDifferentDate = moment(chat.datetime).format('l') !== moment(messageLists[messageLists.indexOf(chat) - 1]?.datetime).format('l');
        if (isDifferentDate || (!isShowRead && !chat.isRead)) {
          if (!chat.isRead) {
            isShowRead = true;
          }
          return (
            <Fragment key={chat.id}>
              <Divider
                color={isDifferentDate ? '#4F4F4F' : 'red'}
                my={26}
                label={
                  <Text className={`font-bold text-sm px-4 ${isDifferentDate ? 'text-[#4F4F4F]' : 'text-indicator-crimson'}`}>{isDifferentDate ? moment(chat.datetime).format('MMMM D, YYYY') : 'New Message'}</Text>
                }
              />
              <ChatItem {...chat} onReplyMessage={onReplyMessage} onDeleteMessage={onDeleteMessage} />
            </Fragment>
          );
        }
        return <ChatItem key={chat.id} {...chat} onReplyMessage={onReplyMessage} onDeleteMessage={onDeleteMessage} />;
      })}
    </Flex>
  );
};

export default ChatList;
