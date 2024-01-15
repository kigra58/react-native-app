import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {TasksContext} from './context';

const TaskList = () => {
  const tasks = useContext(TasksContext);

  return (
    <View>
      {tasks.map(task => (
        <li key={task.id}>
          <TaskApp task={task} />
        </li>
      ))}
    </View>
  );
};

export default TaskList;
