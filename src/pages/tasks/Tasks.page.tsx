import React, { ChangeEventHandler, KeyboardEventHandler, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAxios } from '@mertsolak/axios-helper';

import { Button, TextField } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import { TaskList } from '../../components';
import { reduxRootDefinitions, taskDefinitions } from '../../definitions';
import { taskService } from '../../services';
import { taskActions } from '../../redux/actions';
import { axiosConfig } from '../../configs';
import { errorLocale } from '../../locales';
import { GroupedTasks } from './Tasks.config';

import styles from './Tasks.module.scss';

const TasksPage: React.FC = () => {
  const [groupedTasks, setGroupedTasks] = useState<GroupedTasks>({});
  const [isAddStatusOpen, setIsAddStatusOpen] = useState(false);
  const [status, setStatus] = useState<taskDefinitions.Task['status']>();

  const axios = useAxios();
  const dispatch = useDispatch();

  const userState = useSelector((rootState: reduxRootDefinitions.RootState) => rootState.userState);
  const taskState = useSelector((rootState: reduxRootDefinitions.RootState) => rootState.taskState);

  const { userName } = userState;
  const { tasks } = taskState;

  const handleOnClickAddStatus = () => {
    setIsAddStatusOpen(true);
  };

  const handleOnChangeTextField: ChangeEventHandler<HTMLInputElement> = (event) => {
    setStatus(event.target.value);
  };

  const handleOnKeyPressTextField: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter' && status) {
      setGroupedTasks({ ...groupedTasks, [status]: [] });
    }
  };

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
        Object.keys(groupedTasks).map((eachStatus) => (
          <TaskList
            key={eachStatus}
            taskList={groupedTasks[eachStatus]}
            status={eachStatus}
            userName={userName}
          />
        ))}
      {isAddStatusOpen ? (
        <TextField
          onKeyPress={handleOnKeyPressTextField}
          className={styles.statusTextField}
          onChange={handleOnChangeTextField}
          label="Status"
          variant="outlined"
          fullWidth
          required
        />
      ) : (
        <Button className={styles.addStatus} onClick={handleOnClickAddStatus} fullWidth startIcon={<Add />}>
          Add status
        </Button>
      )}
    </div>
  );
};

export default TasksPage;
