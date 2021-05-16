import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAxios } from '@mertsolak/axios-helper';

import { TaskList } from '../../components';
import { reduxRootDefinitions } from '../../definitions';
import { taskService } from '../../services';
import { taskActions } from '../../redux/actions';

const TasksPage: React.FC = () => {
  const axios = useAxios();
  const dispatch = useDispatch();

  const userState = useSelector((rootState: reduxRootDefinitions.RootState) => rootState.userState);
  const taskState = useSelector((rootState: reduxRootDefinitions.RootState) => rootState.taskState);

  const { userName } = userState;

  useEffect(() => {
    const getTasks = async () => {
      try {
        const { data } = await taskService.getTasks(axios, {});

        dispatch(taskActions.setTasks(data));
      } catch (error) {
        console.log(error); // TODO: Mert handle
      }
    };

    if (userName) {
      getTasks();
    }
  }, [userName]);

  return <TaskList taskList={taskState.tasks} />;
};

export default TasksPage;
