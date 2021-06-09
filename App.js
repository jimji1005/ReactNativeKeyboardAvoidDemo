import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FooterTextInput from './src/FooterTextInput';
import FooterTextInputWithoutSpellCheck from './src/FooterTextInputWithoutSpellCheck';
import AvoidForm from './src/AvoidForm';
import FooterButton from './src/FooterButton';
import FooterTextInputWithTab from './src/FooterTextInputWithTab';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="FooterTextInputWithTab"
        component={FooterTextInputWithTab}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="FooterTextInput" component={FooterTextInput} />
          <Stack.Screen
            name="FooterTextInputWithoutSpellCheck"
            component={FooterTextInputWithoutSpellCheck}
          />
          <Stack.Screen name="AvoidForm" component={AvoidForm} />
          <Stack.Screen name="FooterButton" component={FooterButton} />
          <Stack.Screen name="BottomTab" component={BottomTab} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
