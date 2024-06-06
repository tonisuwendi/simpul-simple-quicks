import React from 'react';
import { useQuicksContext } from '@/hooks';

import QuicksInbox from '../QuicksInbox';
import { QUICK_TAB_ENUM } from '@/helpers/enum';

const QuickContainer: React.FC = () => {
  const { tabOpen } = useQuicksContext();

  return (
    <section className="w-[734px] h-[calc(100vh-240px)] fixed bottom-28 right-9 bg-white rounded-md border border-[#BDBDBD] px-9 py-5">
      {tabOpen === QUICK_TAB_ENUM.INBOX && <QuicksInbox />}
    </section>
  );
};

export default QuickContainer;
