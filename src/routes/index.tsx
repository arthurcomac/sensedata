import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import StackRoutes from './stack.routes';

const Routes = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </NativeBaseProvider>
    )
}

export default Routes;