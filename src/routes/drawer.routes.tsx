import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  // DrawerItemList
} from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';
import About from '../screens/About';
import { FIREBASE_AUTH } from '../../FirebaseConfig';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      <DrawerItem
        label="Sair"
        onPress={() => FIREBASE_AUTH.signOut()}
      />
    </DrawerContentScrollView>
  );
}

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Sobre" component={About} />
    </Drawer.Navigator>
  )
}