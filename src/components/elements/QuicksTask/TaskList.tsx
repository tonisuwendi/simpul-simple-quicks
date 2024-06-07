import React, { Fragment, useEffect, useState } from 'react';
import { Divider } from '@mantine/core';

import TaskItem from './TaskItem';
import { type ITaskItem } from './utils';

const DUMMY_TASKS: ITaskItem[] = [
  {
    id: '1',
    title: 'Close off Case #012920 - RODRIGUES, Amiguel',
    datetime: '6/4/2024, 09:29:26 AM',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non itaque optio delectus, beatae tempore consectetur autem, odit odio voluptatibus repellendus incidunt nam amet ipsum fugiat et animi rerum quae omnis.',
    isCompleted: true,
    category: 'Personal Errands',
    stickers: ['important-asap']
  },
  {
    id: '2',
    title: 'Set up documentation report for several Cases: Case 145443, Case 145444, and Case 145445',
    datetime: '6/4/2024, 10:18:01 AM',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non itaque optio delectus, beatae tempore consectetur autem, odit odio voluptatibus repellendus incidunt nam amet ipsum fugiat et animi rerum quae omnis.',
    isCompleted: false,
    category: 'Urgent To-Do',
    stickers: ['offline-meeting', 'client-related']
  },
  {
    id: '3',
    title: 'Prepare for the upcoming meeting with the Board of Directors',
    datetime: '6/4/2024, 11:29:26 AM',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non itaque optio delectus, beatae tempore consectetur autem, odit odio voluptatibus repellendus incidunt nam amet ipsum fugiat et animi rerum quae omnis.',
    isCompleted: true,
    category: 'Urgent To-Do',
    stickers: ['virtual-meeting']
  },
  {
    id: '4',
    title: 'Review the latest financial report and make necessary adjustments',
    datetime: '6/4/2024, 12:29:26 PM',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non itaque optio delectus, beatae tempore consectetur autem, odit odio voluptatibus repellendus incidunt nam amet ipsum fugiat et animi rerum quae omnis.',
    isCompleted: false,
    category: 'Personal Errands',
    stickers: ['asap', 'self-task', 'appointments']
  },
  {
    id: '5',
    title: 'Prepare for the upcoming meeting with the Board of Directors',
    datetime: '6/4/2024, 01:29:26 PM',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non itaque optio delectus, beatae tempore consectetur autem, odit odio voluptatibus repellendus incidunt nam amet ipsum fugiat et animi rerum quae omnis.',
    isCompleted: false,
    category: 'Urgent To-Do',
    stickers: ['court-related']
  }
];

const TaskList: React.FC<{
  filterValue: string
  isAddNewTask: boolean
}> = ({ filterValue, isAddNewTask }) => {
  const [taskList, setTaskList] = useState<ITaskItem[]>(DUMMY_TASKS);

  useEffect(() => {
    const newTasks = filterValue === 'My Tasks' ? DUMMY_TASKS : DUMMY_TASKS.filter((task) => task.category === filterValue);
    setTaskList(newTasks);
  }, [filterValue]);

  useEffect(() => {
    if (isAddNewTask) {
      setTaskList((tasks) => [...tasks, {
        id: '6',
        title: '',
        datetime: '',
        description: '',
        isCompleted: false,
        category: 'Personal Errands',
        stickers: []
      }]);
    }
  }, [isAddNewTask]);

  return taskList.map((task, index) => {
    if (index === taskList.length - 1) {
      return <TaskItem key={task.id} {...task} />;
    }
    return (
      <Fragment key={task.id}>
        <TaskItem {...task} />
        <Divider my={20} />
      </Fragment>
    );
  });
};

export default TaskList;
