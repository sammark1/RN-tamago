import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import GameScreen from './app/screens/GameScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
//REVIEW difference between Stack Navigator and other navigation options
  return (
    <NavigationContainer>
      {/* <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen 
        name="Welcome" 
        component={WelcomeScreen} 
        options={{ title: 'Welcome Screen' }}
        />
        <Stack.Screen 
        name="Game" 
        component={GameScreen} 
        mode="modal"
        options={{ title: 'Game Screen' }}
        />
      </Stack.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen
        name="Welcome" 
        component={WelcomeScreen} 
        options={{ title: 'Welcome Screen' }}
        />
        <Tab.Screen
        name="Game" 
        component={GameScreen} 
        mode="modal"
        options={{ title: 'Game Screen' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
