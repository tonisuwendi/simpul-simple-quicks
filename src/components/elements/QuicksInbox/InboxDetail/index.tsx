import React, { useEffect, useRef, useState } from 'react';
import { ScrollArea } from '@mantine/core';

import HeaderInfo from './HeaderInfo';
import Form from './Form';
import ChatList from './ChatList';

export interface IReplyMessage {
  name: string
  message: string
};

const InboxDetail: React.FC<{
  onBack: () => void
}> = ({ onBack }) => {
  const viewport = useRef<HTMLDivElement>(null);

  const [replyMessage, setReplyMessage] = useState<IReplyMessage | null>(null);

  useEffect(() => {
    viewport.current?.scrollTo({ top: viewport.current?.scrollHeight });
  }, []);

  return (
    <>
      <HeaderInfo onBack={onBack} />
      <section className="p-5">
        <ScrollArea
          offsetScrollbars
          viewportRef={viewport}
          className="h-[calc(100vh-400px)]"
        >
          <ChatList onReplyMessage={setReplyMessage} />
        </ScrollArea>
        <Form
          replyMessage={replyMessage}
          onCloseReply={() => { setReplyMessage(null); }}
        />
      </section>
    </>
  );
};

export default InboxDetail;
