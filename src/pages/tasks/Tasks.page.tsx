import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAxios } from '@mertsolak/axios-helper';

import { TaskList } from '../../components';
import { reduxRootDefinitions } from '../../definitions';
import { taskService } from '../../services';
import { taskActions } from '../../redux/actions';
import { axiosConfig } from '../../configs';
import { errorLocale } from '../../locales';
import { GroupedTasks } from './Tasks.config';

import styles from './Tasks.module.scss';

const TasksPage: React.FC = () => {
  const [groupedTasks, setGroupedTasks] = useState<GroupedTasks>({});

  const axios = useAxios();
  const dispatch = useDispatch();

  const userState = useSelector((rootState: reduxRootDefinitions.RootState) => rootState.userState);
  const taskState = useSelector((rootState: reduxRootDefinitions.RootState) => rootState.taskState);

  const { userName } = userState;
  const { tasks } = taskState;

  useEffect(() => {
    const getTasks = async () => {
      try {
        const { data } = await taskService.getTasks(axios, {});

        dispatch(taskActions.setTasks(data));
      } catch (error) {
        if (!error?.config?.handled) {
          axiosConfig.errorHandler(errorLocale.errorMessages.UNHANDLED_ERROR);
        }
      }
    };

    if (userName) {
      getTasks();
    }
  }, [userName]);

  useEffect(() => {
    const newGroupedTasks: GroupedTasks = {};

    tasks.forEach((task) => {
      if (newGroupedTasks[task.status]) {
        newGroupedTasks[task.status].push(task);
      } else {
        newGroupedTasks[task.status] = [task];
      }
    });

    setGroupedTasks(newGroupedTasks);
  }, [tasks]);

  return (
    <div className={styles.container}>
      {userName &&
        Object.keys(groupedTasks).map((status) => (
          <TaskList key={status} taskList={groupedTasks[status]} status={status} userName={userName} />
        ))}
    </div>
  );
};

export default TasksPage;
