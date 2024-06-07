import React from 'react';
import { useQuicksContext } from '@/hooks';
import { QUICK_TAB_ENUM } from '@/helpers/enum';

import QuicksInbox from '../QuicksInbox';
import QuicksTask from '../QuicksTask';

const QuickContainer: React.FC = () => {
  const { tabOpen } = useQuicksContext();

  return (
    <section className="w-[734px] h-[calc(100vh-240px)] fixed bottom-28 right-9 bg-white rounded-md border border-[#BDBDBD]">
      {tabOpen === QUICK_TAB_ENUM.INBOX && <QuicksInbox />}
      {tabOpen === QUICK_TAB_ENUM.TASK && <QuicksTask />}
    </section>
  );
};

export default QuickContainer;
