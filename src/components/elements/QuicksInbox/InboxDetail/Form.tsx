import React from 'react';
import { ActionIcon, Flex, Text } from '@mantine/core';
import { Close } from '@mui/icons-material';

import InputText from '../../InputText';
import Button from '../../Button';
import { type IReplyMessage } from '.';

const Form: React.FC<{
  replyMessage: IReplyMessage | null
  onCloseReply: () => void
}> = ({ replyMessage, onCloseReply }) => (
  <Flex align="flex-end" gap={12} className="absolute bottom-5 left-0 w-full px-5">
    <div className="relative w-full">
      {replyMessage !== null && (
        <div className="border border-primary-slate bg-primary-graphite px-4 pt-3 pb-4 rounded-t-[5px]">
          <Flex align="center" justify="space-between">
            <Text className="font-bold text-sm text-[#4F4F4F]">{`Replying to ${replyMessage.name}`}</Text>
            <ActionIcon
              variant="transparent"
              color="#4F4F4F"
              onClick={onCloseReply}
            >
              <Close />
            </ActionIcon>
          </Flex>
          <Text className="mt-1 text-sm text-[#4F4F4F]">
            {replyMessage.message}
          </Text>
        </div>
      )}
      <InputText placeholder="Type a new message" classNameInput={replyMessage === null ? '' : 'rounded-t-none border-t-0'} />
    </div>
    <Button className="shrink-0">Send</Button>
  </Flex>
);

export default Form;
