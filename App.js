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
import FooterButtonWithTab from './src/FooterButtonWithTab';

import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

function getHeaderTitle(route) {
  const routeName =
    getFocusedRouteNameFromRoute(route) ?? 'FooterTextInputWithTab';

  switch (routeName) {
    case 'FooterTextInputWithTab':
      return 'Sticky Input w/Tab';
    case 'FooterButtonWithTab':
      return 'Sticky Button w/Tab';
  }
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="FooterTextInputWithTab"
        component={FooterTextInputWithTab}
      />
      <Tab.Screen name="FooterButtonWithTab" component={FooterButtonWithTab} />
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
          <Stack.Screen
            name="FooterTextInput"
            component={FooterTextInput}
            options={{title: 'Sticky Input'}}
          />
          <Stack.Screen
            name="FooterTextInputWithoutSpellCheck"
            component={FooterTextInputWithoutSpellCheck}
            options={{title: 'Sticky Input w/o SpecllCheck'}}
          />
          <Stack.Screen
            name="AvoidForm"
            component={AvoidForm}
            options={{title: 'Many Input Avoid'}}
          />
          <Stack.Screen
            name="FooterButton"
            component={FooterButton}
            options={{title: 'Sticky Button'}}
          />
          <Stack.Screen
            name="BottomTab"
            component={BottomTab}
            options={({route}) => ({
              headerTitle: getHeaderTitle(route),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
