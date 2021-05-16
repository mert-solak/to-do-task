import React, { DragEventHandler } from 'react';
import { useAxios } from '@mertsolak/axios-helper';
import { useDispatch } from 'react-redux';

import { Props } from './TaskList.config';
import { Task } from '../index';

import { taskService } from '../../services';
import { axiosConfig } from '../../configs';
import { errorLocale } from '../../locales';
import { taskActions } from '../../redux/actions';

import styles from './TaskList.module.scss';

export const TaskList: React.FC<Props> = ({ taskList, status, userName }) => {
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

  return (
    <div className={styles.container}>
      <p className={styles.title}>{status}</p>
      <div onDragOver={handleOnDragOver} onDrop={handleOnDrop}>
        {taskList.map((task) => (
          <Task key={task._id} task={task} userName={userName} />
        ))}
      </div>
    </div>
  );
};
