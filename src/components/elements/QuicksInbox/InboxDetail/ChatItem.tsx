import React from 'react';
import moment from 'moment';
import { ActionIcon, Flex, Menu, Text } from '@mantine/core';
import { MoreHoriz } from '@mui/icons-material';

import { type IListChatItem } from '../utils';
import { type IReplyMessage } from '.';

const ChatItem: React.FC<IListChatItem & {
  onReplyMessage: (replyMessage: IReplyMessage | null) => void
  onDeleteMessage: (id: string) => void
}> = ({ id, name, message, datetime, replyMessage, onReplyMessage, onDeleteMessage }) => {
  const isMe = name === 'You';
  return (
    <Flex direction="column">
      <Text className={`text-sm font-bold mb-2 ${isMe ? 'text-chats-lavender-dark text-right' : 'text-chats-peach-dark'}`}>{name}</Text>
      {replyMessage !== undefined && (
        <Flex direction={isMe ? 'row-reverse' : 'row'}>
          <div className="p-[10px] rounded-[5px] w-fit max-w-[70%] border mb-2 border-primary-silver bg-primary-graphite">
            <Text className="text-[#4F4F4F] text-sm">{replyMessage}</Text>
          </div>
        </Flex>
      )}
      <Flex gap={6} direction={isMe ? 'row-reverse' : 'row'}>
        <div className={`py-2 px-3 rounded-[5px] w-auto max-w-[70%] ${isMe ? 'bg-chats-lavender-light' : 'bg-chats-peach-light'}`}>
          <Text className="text-[#836060] text-sm">{message}</Text>
          <Text className="text-[#4F4F4F] text-xs mt-1.5">{moment(datetime).format('HH:mm')}</Text>
        </div>
        <Menu withArrow offset={4} arrowSize={14}>
          <Menu.Target>
            <ActionIcon variant="white" color="black" className="shrink-0">
              <MoreHoriz />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown w={126} className="border border-primary-silver">
            {isMe ? (
              <>
                <Menu.Item>
                  Edit
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item color="red" onClick={() => { onDeleteMessage(id); }}>
                  Delete
                </Menu.Item>
              </>
            ) : (
              <>
                <Menu.Item>
                  Share
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item onClick={() => { onReplyMessage({ name, message }); }}>
                  Reply
                </Menu.Item>
              </>
            )}
          </Menu.Dropdown>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default ChatItem;
