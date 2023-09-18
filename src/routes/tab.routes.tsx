import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import ButtonNew from '../components/ButtonNew'

import Categories from '../screens/Categories';
import Home from '../screens/Home';
import Transactions from '../screens/Transactions';
// import DrawerRoutes from './drawer.routes';
import NewTransaction from '../screens/NewTransaction';

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name='home'
        component={Home}
        options={{
          tabBarIcon: ({ color, size}) => <Feather name="home" color={color} size={size} />,
          tabBarLabel: 'Inicio'
        }}
      />

      <Tab.Screen
        name='transactions'
        component={Transactions}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="search" color={color} size={size} />,
          tabBarLabel: 'Busca'
        }}
      />

      <Tab.Screen
        name='sidebar'
        component={NewTransaction}
        options={{
          tabBarIcon: ({ color, size }) => <ButtonNew color={color} size={size} />,
          tabBarLabel: '',
        }}
      />
    </Tab.Navigator>
  )
}

export default TabRoutes;