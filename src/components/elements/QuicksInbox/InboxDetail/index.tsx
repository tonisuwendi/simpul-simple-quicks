import React, { useEffect, useRef } from 'react';
import { ScrollArea } from '@mantine/core';

import HeaderInfo from './HeaderInfo';
import Form from './Form';
import ChatList from './ChatList';

const InboxDetail: React.FC<{
  onBack: () => void
}> = ({ onBack }) => {
  const viewport = useRef<HTMLDivElement>(null);

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
          <ChatList />
        </ScrollArea>
        <Form />
      </section>
    </>
  );
};

export default InboxDetail;
