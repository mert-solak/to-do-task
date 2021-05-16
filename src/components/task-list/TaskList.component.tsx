import React, { DragEventHandler, useState } from 'react';
import { useAxios } from '@mertsolak/axios-helper';
import { useDispatch } from 'react-redux';

import { Add } from '@material-ui/icons';
import { Button } from '@material-ui/core';

import { Props } from './TaskList.config';
import { Task, Popup, TaskForm } from '../index';
import { taskService } from '../../services';
import { axiosConfig } from '../../configs';
import { errorLocale } from '../../locales';
import { taskActions } from '../../redux/actions';

import styles from './TaskList.module.scss';

export const TaskList: React.FC<Props> = ({ taskList, status, userName }) => {
  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);

  const axios = useAxios();
  const dispatch = useDispatch();

  const handleOnDragOver: DragEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
  };

  const handleOnDrop: DragEventHandler<HTMLDivElement> = async (event) => {
    const taskId = event.dataTransfer.getData('text');

    try {
      await taskService.updateTask(axios, { _id: taskId, status });

      dispatch(taskActions.updateTask({ _id: taskId, status }));
    } catch (error) {
      if (!error?.config?.handled) {
        axiosConfig.errorHandler(errorLocale.errorMessages.UNHANDLED_ERROR);
      }
    }
  };

  const handleOnClickAddTask = () => {
    setIsTaskFormOpen(true);
  };

  const handleOnCreateUpdateFinish = () => {
    setIsTaskFormOpen(false);
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>{status}</p>
      <div className={styles.content} onDragOver={handleOnDragOver} onDrop={handleOnDrop}>
        {taskList.map((task) => (
          <Task key={task._id} task={task} userName={userName} />
        ))}
        <Button onClick={handleOnClickAddTask} fullWidth className={styles.addTask} startIcon={<Add />}>
          Add Task
        </Button>
      </div>
      <Popup isDialogOpen={isTaskFormOpen} onDialogClose={setIsTaskFormOpen} title="Add Task">
        <TaskForm userName={userName} status={status} onCreateUpdateFinish={handleOnCreateUpdateFinish} />
      </Popup>
    </div>
  );
};
