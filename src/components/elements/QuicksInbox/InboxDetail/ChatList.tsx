import React, { Fragment } from 'react';
import moment from 'moment';
import { Divider, Flex, Text } from '@mantine/core';

import ChatItem from './ChatItem';
import { type IListChatItem } from '../utils';

const DUMMY_CHATS: IListChatItem[] = [
  {
    id: '1',
    name: 'You',
    message: 'Hello, i will ask about the product',
    datetime: '6/3/2024, 03:11:26 PM',
    isRead: true
  },
  {
    id: '2',
    name: 'Melani Shinta',
    message: 'What product do you want to ask?',
    datetime: '6/3/2024, 03:12:26 PM',
    isRead: true
  },
  {
    id: '3',
    name: 'You',
    message: 'I want to ask about the product that you sell. Can you explain it to me?',
    datetime: '6/3/2024, 03:13:26 PM',
    isRead: true
  },
  {
    id: '4',
    name: 'Melani Shinta',
    message: 'Sure, i will explain it to you. The product that we sell is a product that is very good for your health. It is made from natural ingredients and has been tested by the health department. So, you don\'t need to worry about the quality of the product. Do you want to buy it?',
    datetime: '6/4/2024, 09:29:26 AM',
    isRead: true
  },
  {
    id: '5',
    name: 'You',
    message: 'Okay, i will buy it. How much is it?',
    datetime: '6/5/2024, 07:38:26 PM',
    isRead: true
  },
  {
    id: '6',
    name: 'Melani Shinta',
    message: 'The price of the product is $100. Do you want to buy it? We can send it to your address',
    datetime: '6/5/2024, 07:39:26 PM',
    isRead: true
  },
  {
    id: '7',
    name: 'You',
    message: 'Okay, i will buy it. Please send it to my address. Thank you',
    datetime: '6/6/2024, 11:40:26 PM',
    isRead: true
  },
  {
    id: '8',
    name: 'Melani Shinta',
    message: 'You\'re welcome. We will send it to your address. Thank you for buying our product. Have a nice day!',
    datetime: '6/6/2024, 11:41:26 PM',
    isRead: true
  },
  {
    id: '9',
    name: 'You',
    message: 'Thank you. Have a nice day too!',
    datetime: '6/6/2024, 11:42:26 PM',
    isRead: true
  },
  {
    id: '10',
    name: 'Melani Shinta',
    message: 'You\'re welcome.',
    datetime: '6/6/2024, 11:43:26 PM',
    isRead: false
  },
  {
    id: '11',
    name: 'Melani Shinta',
    message: 'Don\'t forget to buy our product again next time. Goodbye!',
    datetime: '6/6/2024, 11:44:26 PM',
    isRead: false
  }
];

const ChatList: React.FC = () => {
  let isShowRead = false;

  return (
    <Flex direction="column" gap={10}>
      {DUMMY_CHATS.map((chat) => {
        const isDifferentDate = moment(chat.datetime).format('l') !== moment(DUMMY_CHATS[DUMMY_CHATS.indexOf(chat) - 1]?.datetime).format('l');
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
              <ChatItem {...chat} />
            </Fragment>
          );
        }
        return <ChatItem key={chat.id} {...chat} />;
      })}
    </Flex>
  );
};

export default ChatList;
