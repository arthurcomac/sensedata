import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Categories from '../screens/Categories';
import Home from '../screens/Home';
import Transactions from '../screens/Transaction';
import DrawerRoutes from './drawer.routes';

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
          tabBarIcon: ({ color, size }) => <Feather name="dollar-sign" color={color} size={size} />,
          tabBarLabel: 'Transações'
        }}
      />

      <Tab.Screen
        name='categories'
        component={Categories}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="bookmark" color={color} size={size} />,
          tabBarLabel: 'Categorias'
        }}
      />

      <Tab.Screen
        name='sidebar'
        component={DrawerRoutes}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="menu" color={color} size={size} />,
          tabBarLabel: 'Menu',
        }}
      />
    </Tab.Navigator>
  )
}

export default TabRoutes;