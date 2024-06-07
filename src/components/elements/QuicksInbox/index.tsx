import React, { useState } from 'react';

import InboxDetail from './InboxDetail';
import InboxList from './InboxList';

const QuicksInbox: React.FC = () => {
  const [selectedInbox, setSelectedInbox] = useState<string | null>(null);

  if (selectedInbox === null) return <InboxList onOpenDetail={setSelectedInbox} />;

  return <InboxDetail onBack={() => { setSelectedInbox(null); }} />;
};

export default QuicksInbox;
