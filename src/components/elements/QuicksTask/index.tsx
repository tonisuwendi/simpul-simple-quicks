import React, { useEffect, useRef, useState } from 'react';
import { ScrollArea } from '@mantine/core';
import { useQuicksContext } from '@/hooks';

import HeaderAction from './HeaderAction';
import TaskList from './TaskList';
import LoadingSpinner from '../LoadingSpinner';

const QuicksTask: React.FC = () => {
  const viewport = useRef<HTMLDivElement>(null);

  const [filterValue, setFilterValue] = useState('My Tasks');
  const [isLoading, setLoading] = useState(true);

  const { isAddNewTask } = useQuicksContext();

  useEffect(() => {
    if (isAddNewTask) {
      setTimeout(() => {
        viewport.current?.scrollTo({ top: viewport.current?.scrollHeight, behavior: 'smooth' });
      }, 10);
    }
  }, [isAddNewTask]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <section className="px-9 py-5 h-full">
      <HeaderAction
        filterValue={filterValue}
        onFilterChange={setFilterValue}
      />
      {isLoading ? <LoadingSpinner label="Loading Task List..." /> : (
        <ScrollArea offsetScrollbars viewportRef={viewport} className="h-[calc(100vh-340px)] mt-5">
          <TaskList filterValue={filterValue} />
        </ScrollArea>
      )}
    </section>
  );
};

export default QuicksTask;
