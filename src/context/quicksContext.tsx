'use client';

import React, { createContext, useMemo, useState } from 'react';
import { type QUICK_TAB_ENUM } from '@/helpers/enum';

export interface InitialState {
  tabOpen: QUICK_TAB_ENUM | null
  setTabOpen: (tab: QUICK_TAB_ENUM | null) => void
  isAddNewTask: boolean
  setIsAddNewTask: (value: boolean) => void
};

export const QuicksContext = createContext<InitialState>({
  tabOpen: null,
  setTabOpen: () => {},
  isAddNewTask: false,
  setIsAddNewTask: () => {}
});

const QuicksProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [tabOpen, setTabOpen] = useState<QUICK_TAB_ENUM | null>(null);
  const [isAddNewTask, setIsAddNewTask] = useState(false);

  const values = useMemo(() => ({
    tabOpen,
    setTabOpen,
    isAddNewTask,
    setIsAddNewTask
  }), [tabOpen, isAddNewTask]);

  return (
    <QuicksContext.Provider value={values}>
      {children}
    </QuicksContext.Provider>
  );
};

export default QuicksProvider;
