import {Input, Button, Box} from 'native-base';
import React, {useState, useContext} from 'react';
import {TasksDispatchContext} from './context';

interface ITask {
  text: string;
  done: boolean;
}

const EditTask: React.FC<ITask> = ({task}) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(TasksDispatchContext);
  let taskContent;
  
  if (isEditing) {
    taskContent = (
      <>
        <Input
          onChangeText={e => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                text: e,
              },
            });
          }}
          type="text"
          value={task.text}
        />
        <Button onPress={() => setIsEditing(false)}> Save </Button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <Button onPress={() => setIsEditing(true)}> Edit </Button>
      </>
    );
  }

  return (
    <Box>
      <Input
        onChangeText={e => {
          dispatch({
            type: 'changed',
            task: {
              ...task,
              done: e,
            },
          });
        }}
        type="text"
        value={task.done}
      />
      {taskContent}

      <Button
        onPress={() =>
          dispatch({
            type: 'deleted',
            id: task.id,
          })
        }>
        {' '}
        Delete{' '}
      </Button>
    </Box>
  );
};

export default EditTask;
