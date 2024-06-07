import React, { useRef, useState } from 'react';
import { ScrollArea } from '@mantine/core';

import HeaderAction from './HeaderAction';
import TaskList from './TaskList';

const QuicksTask: React.FC = () => {
  const viewport = useRef<HTMLDivElement>(null);

  const [filterValue, setFilterValue] = useState('My Tasks');
  const [addNewTask, setAddNewTask] = useState(false);

  const handleAddNewTask = (): void => {
    setAddNewTask(true);
    viewport.current?.scrollTo({ top: viewport.current?.scrollHeight, behavior: 'smooth' });
  };

  return (
    <section className="px-9 py-5">
      <HeaderAction
        filterValue={filterValue}
        onFilterChange={setFilterValue}
        onNewTask={handleAddNewTask}
      />
      <ScrollArea offsetScrollbars viewportRef={viewport} className="h-[calc(100vh-340px)] mt-5">
        <TaskList filterValue={filterValue} isAddNewTask={addNewTask} />
      </ScrollArea>
    </section>
  );
};

export default QuicksTask;
