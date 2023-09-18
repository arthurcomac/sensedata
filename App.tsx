import 'react-native-gesture-handler';

import Routes from './src/routes';
import { TransactionsContextProvider } from "./src/context/TransactionsContext";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TransactionsContextProvider>
        <Routes />
      </TransactionsContextProvider>
    </GestureHandlerRootView>        
  );
}
