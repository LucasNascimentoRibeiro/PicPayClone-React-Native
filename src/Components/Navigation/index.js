import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';

import Home from '../../pages/Home';
import Wallet from '../../pages/Wallet';
import Notifications from '../../pages/Notifications';
import Store from '../../pages/Store';


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
  Store: {
    lib: MaterialIcons,
    name: 'shopping-bag',
  },
}

const Navigation = () => {
  return (
      <Tab.Navigator
        initialRouteName='Home'
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
            component={Notifications} 
            options={{
                title: 'Notificações'
            }}
          />
          <Tab.Screen 
            name='Store' 
            component={Store} 
            options={{
                title: 'Loja'
            }}
          />
      </Tab.Navigator>
  )
}

export default Navigation;