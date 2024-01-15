import React from 'react';
import {View} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import Auth from './src/screens/auth/Auth';
// import UserList from './src/screens/user/UserList';


const App = () => {


  return (

      <NativeBaseProvider>
      <View>
          <Auth />
          {/* <UserList /> */}
        </View>
      </NativeBaseProvider>

  );
};

export default App;
