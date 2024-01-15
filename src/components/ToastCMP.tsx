import React from 'react';
import {Center, Button, useToast} from 'native-base';

const ToastCMP = ({description}: {description: string}) => {
  const toast = useToast();
  return (
    <Center>
      <Button
        onPress={() =>
          toast.show({
            description,
          })
        }>
        Show Toast
      </Button>
    </Center>
  );
};

export default ToastCMP;
