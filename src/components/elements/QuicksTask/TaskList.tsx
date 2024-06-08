import React, { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import { Divider, Flex, Text } from '@mantine/core';
import { getLocalStorage, setLocalStorage } from '@/helpers/storage';
import { STORAGE_ENUM } from '@/helpers/enum';
import { useQuicksContext } from '@/hooks';

import TaskItem from './TaskItem';
import { type ITaskItem } from './utils';

const TaskList: React.FC<{
  filterValue: string
}> = ({ filterValue }) => {
  const taskStorage = getLocalStorage(STORAGE_ENUM.TASK) || '[]';
  const taskStorageParsed: ITaskItem[] = JSON.parse(taskStorage);

  const [taskList, setTaskList] = useState<ITaskItem[]>(taskStorageParsed);

  const { isAddNewTask } = useQuicksContext();

  useEffect(() => {
    const newTasks = filterValue === 'My Tasks' ? taskStorageParsed : taskStorageParsed.filter((task) => task.category === filterValue);
    setTaskList(newTasks);
  }, [filterValue]);

  useEffect(() => {
    if (isAddNewTask) {
      setTaskList((tasks) => [...tasks, {
        id: `task-${tasks.length + 1}`,
        title: '',
        date: '',
        description: '',
        isCompleted: false,
        category: 'Personal Errands',
        stickers: []
      }]);
    }
  }, [isAddNewTask]);

  const handleChangeValue = (id: string, field: string, value: string | boolean | string[]): void => {
    const newTasks = taskList.map((task) => {
      if (task.id === id) {
        return { ...task, [field]: value };
      }
      return task;
    });
    setTaskList(newTasks);
    setLocalStorage(STORAGE_ENUM.TASK, JSON.stringify(newTasks));
  };

  const handleDeleteTask = (id: string): void => {
    const newTasks = taskList.filter((task) => task.id !== id);
    setTaskList(newTasks);
    setLocalStorage(STORAGE_ENUM.TASK, JSON.stringify(newTasks));
  };

  if (taskList.length === 0) {
    return (
      <Flex align="center" direction="column" gap={12} className="text-center text-[#828282] mt-5">
        <Image src="/img/no-task.png" alt="Empty Task" width={500} height={500} className="w-[150px]" />
        <Text className="font-bold text-[#4F4F4F]">
          No task found. Please add a new task.
        </Text>
      </Flex>
    );
  }

  return taskList.map((task, index) => {
    if (index === taskList.length - 1) {
      return (
        <TaskItem
          key={task.id}
          {...task}
          onChangeValue={handleChangeValue}
          onDelete={handleDeleteTask}
        />
      );
    }
    return (
      <Fragment key={task.id}>
        <TaskItem
          {...task}
          onChangeValue={handleChangeValue}
          onDelete={handleDeleteTask}
        />
        <Divider my={20} />
      </Fragment>
    );
  });
};

export default TaskList;
