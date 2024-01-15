import React, {useState} from 'react';
import {
  Button,
  Input,
  Box,
  FormControl,
  WarningOutlineIcon,
  Stack,
  useToast,
} from 'native-base';

const Signup = () => {
  const [formFields, setFormFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const toast = useToast();

  const signupHandler = () => {
    toast.show({
      render: () => {
        return (
          <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
            Welcome {formFields.firstName}
          </Box>
        );
      },
    });
  };

  console.log('==========', formFields);
  return (
    <Box alignItems="center">
      <Box w="100%" maxWidth="300px">
        <FormControl isRequired>
          <Stack mx="4">
            {/* FIRST NAME FIELD  */}
            <FormControl.Label>Email</FormControl.Label>
            <Input
              placeholder="First Name"
              onChangeText={firstName =>
                setFormFields({...formFields, firstName})
              }
              type="text"
              value={formFields.firstName}
            />
            <FormControl.HelperText>
              Must be atleast 6 characters.
            </FormControl.HelperText>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              Atleast 6 characters are required.
            </FormControl.ErrorMessage>

            {/* LAST NAME FIELD  */}
            <FormControl.Label>Last Name</FormControl.Label>
            <Input
              placeholder="Last Name"
              onChangeText={lastName =>
                setFormFields({...formFields, lastName})
              }
              type="text"
              value={formFields.lastName}
            />
            <FormControl.HelperText>
              Must be atleast 6 characters.
            </FormControl.HelperText>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              Atleast 6 characters are required.
            </FormControl.ErrorMessage>

            {/* EMAIL FIELD  */}
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

            {/* PASSWORD FIELD   */}
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

            {/* SUBMIT BUTTON  */}
            <Button onPress={signupHandler}> Signup </Button>
          </Stack>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Signup;
