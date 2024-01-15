import React, {  useState} from 'react';
import {
  Button,
  Input,
  Box,
  FormControl,
  WarningOutlineIcon,
  Stack,
  useToast,
} from 'native-base';


const Login = () => {
  const [formFields, setFormFields] = useState({
    email: '',
    password: '',
  });

 
  console.log('========storeDatastoreData', storeData);

  const toast = useToast();

  const loginHandler = () => {
    // toast.show({
    //   render: () => {
    //     return (
    //       <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
    //         {formFields.email}
    //       </Box>
    //     );
    //   },
    // });
  };

  console.log('==========', formFields);

  return (
    <Box alignItems="center">
      <Box w="100%" maxWidth="300px">
        <FormControl isRequired>
          <Stack mx="4">
            <FormControl.Label>Email</FormControl.Label>
            <Input
              placeholder="Email"
              onChangeText={email => setFormFields({...formFields, email})}
              value={formFields.email}
              type="text"
            />
            <FormControl.HelperText>
              Must be atleast 6 characters.
            </FormControl.HelperText>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              Atleast 6 characters are required.
            </FormControl.ErrorMessage>

            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              onChangeText={password =>
                setFormFields({...formFields, password})
              }
              value={formFields.password}
              placeholder="Password"
            />
            <FormControl.HelperText>
              Must be atleast 6 characters.
            </FormControl.HelperText>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              Atleast 6 characters are required.
            </FormControl.ErrorMessage>
            <Button onPress={loginHandler}> Login </Button>
          </Stack>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Login;
