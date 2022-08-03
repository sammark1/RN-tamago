import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GameScreen from './app/screens/GameScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
//REVIEW difference between Stack Navigator and other navigation options
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Welcome" 
        component={WelcomeScreen} 
        options={{ title: 'Welcome Screen' }}
        />
        <Stack.Screen 
        name="Game" 
        component={GameScreen} 
        options={{ title: 'Game Screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
