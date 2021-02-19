import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

import Home from '../../pages/Home';
import Wallet from '../../pages/Wallet';
import PayScreen from '../../pages/PayScreen';
import PayButton from './../PayButton';


const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home',
  },
  Wallet: {
    lib: AntDesign,
    name: 'creditcard',
  },
  Pay: {
    lib: AntDesign,
    name: 'pay-circle1',
  },
  Notifications: {
    lib: Ionicons,
    name: 'ios-notifications-outline',
  },
  Settings: {
    lib: Ionicons,
    name: 'settings-outline',
  },
}

const Navigation = () => {
  return (
      <Tab.Navigator
        initialRouteName='Wallet'
        screenOptions={({ route, navigation }) => ({
          tabBarIcon: ({ color, size, focused }) => {

            const { lib: Icon, name} = icons[route.name];

            if (route.name === 'Pay') {
              return( 
                <PayButton
                  onPress={ () => navigation.navigate('Pay')}
                  focused={focused}
                />
              )
            }

            return <Icon name={name} color={color} size={size}/>

            //Alternative method
            
            // if (route.name === 'Home') {
            //   iconsName = icons.Home.name
            //   return <AntDesign name={iconsName} color={color} size={size} />
            // }else if (route.name === 'Wallet') {
            //   iconsName = icons.Wallet.name
            //   return <AntDesign name={iconsName} color={color} size={size} />
            // }else if (route.name === 'Pay') {
            //   iconsName = icons.Pay.name
            //   return <AntDesign name={iconsName} color={color} size={size} />
            // }
            // else if (route.name === 'Notifications') {
            //   iconsName = icons.Notifications.name
            //   return <Ionicons name={iconsName} color={color} size={size} />
            // }else {
            //   iconsName = icons.Settings.name
            //   return <Ionicons name={iconsName} color={color} size={size} />
            // }

            
          },
        })}
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#fff8',
          tabStyle: {
            backgroundColor: '#1e222b',
            borderTopColor: 'rgba(255,255,255,0.2)'
          }
        }}
      >
          <Tab.Screen
            name='Home' 
            component={Home} 
            options={{
                title: 'Inicio',
            }}
           />
          <Tab.Screen 
            name='Wallet' 
            component={Wallet} 
            options={{
                title: 'Carteira'
            }}
          />
          <Tab.Screen 
            name='Pay' 
            component={PayScreen} 
            options={{
                title: ''
            }}
          />
          <Tab.Screen 
            name='Notifications' 
            component={Wallet} 
            options={{
                title: 'Notificações'
            }}
          />
          <Tab.Screen 
            name='Settings' 
            component={Wallet} 
            options={{
                title: 'Ajustes'
            }}
          />
      </Tab.Navigator>
  )
}

export default Navigation;