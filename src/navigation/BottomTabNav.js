import React from 'react';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Search} from '../view';

import StackNav from './StackNav';

const Tab = createBottomTabNavigator();

class BottomTabNav extends React.PureComponent {
    render(){
        return(
            <Tab.Navigator
                tabBarOptions= {{
                    activeBackgroundColor: '#311957',
                    inactiveBackgroundColor: '#311957',
                    activeTintColor: '#FFF',
                }}
            >
                <Tab.Screen
                    name='Main'
                    component={StackNav}
                />
                <Tab.Screen
                    name='Search'
                    component={Search}
                />
            </Tab.Navigator>
        )
    }
}

export default BottomTabNav;