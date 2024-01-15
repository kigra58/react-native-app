import {HStack, Spinner} from 'native-base';
import React from 'react';

export default function LoaderCMP() {
  return (
    <HStack space={8} justifyContent="center">
      <Spinner color="cyan.500" />
    </HStack>
  );
}
