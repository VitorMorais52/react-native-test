import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import home from './views/home';
import my_profile from './views/my_profile';
import friend_profile from './views/friend_profile';

const AppStack = createStackNavigator();

export default function Routes()
{
    return(
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name="home" options={{headerShown: false}} component={home}/>
                <AppStack.Screen name="friend_profile" options={{headerShown: false}} component={friend_profile}/>
                <AppStack.Screen name="my_profile" options={{headerShown: false}} component={my_profile}/>                
            </AppStack.Navigator>
        </NavigationContainer>
    );
}