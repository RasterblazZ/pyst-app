import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen'; // Asegúrate de tener este componente
import SettingsScreen from './SettingsScreen'; // Asegúrate de tener este componente

const Drawer = createDrawerNavigator();

export default function RootLayout() {
  return (
      <Drawer.Navigator initialRouteName="HomeScreen">
        <Drawer.Screen name="HomeScreen"
        component={HomeScreen}
        options={{ drawerLabel: 'Inicio', title: 'Pantalla de Inicio' }}
        
        />
        <Drawer.Screen name="SettingsScreen"
        component={SettingsScreen}
        options={{ drawerLabel: 'Opciones', title: 'Pantalla de Opciones' }}
        />
      </Drawer.Navigator>
  );
}