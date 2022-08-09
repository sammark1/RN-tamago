import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TitleScreen from './app/screens/TitleScreen';
import GameScreen from './app/screens/GameScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

const Tab = createBottomTabNavigator();

export default function App() {
//REVIEW layout of Stack Navigator vs Tab navigator
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
        name="Title"
        component={TitleScreen}
        options={{
          title:"Title Screen",
          tabBarButton: ()=> null,
          tabBarStyle:{display:'none'},
          headerShown:false,
        }}
        />
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
