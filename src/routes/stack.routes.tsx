import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../FirebaseConfig';

import TabRoutes from './tab.routes';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <Stack.Navigator initialRouteName='Login'>
      { user ? (
        <Stack.Screen name='TabRoutes' component={TabRoutes} options={{ headerShown: false }}/>
      ) : (
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}/>
      )}
    </Stack.Navigator>
  )
}

export default StackRoutes;