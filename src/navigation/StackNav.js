import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Main, Artist} from '../view';

const Stack = createStackNavigator();

class StackNav extends React.PureComponent {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={{headerShown: false}}/>
        <Stack.Screen name="Artist" component={Artist} options={{headerShown: false}}/>
      </Stack.Navigator>
    );
  }
}

export default StackNav;