import React from 'react'
import {Image} from 'react-native'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Icon from 'react-native-vector-icons/FontAwesome'
import HomeIcon from '../assets/icons/home.svg'
const image1=<Icon  name="comments" size={30} color="#900"  />;
const Tab=createBottomTabNavigator()


const Tabs=()=>{
    return (
        <Tab.Navigator screenOptions={{headerShown:false,tabBarShowLabel:!true,tabBarStyle:{backgroundColor:"transparent",position:"absolute",elevation:0,borderTopWidth:0}}}  >
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon:({focused})=>{
                 return (<Image source={{uri:"https://img.icons8.com/material-outlined/24/000000/home--v2.png"}} resizeMode="contain" style={{width:30,height:30}} />)
                }
            }} />

             <Tab.Screen name="Contact" component={Home} options={{
                tabBarIcon:({focused})=>{
                 return (<Image source={{uri:"https://img.icons8.com/material-outlined/24/000000/guest-male.png"}} resizeMode="contain" style={{width:30,height:30}} />)
                }
            }} />

            <Tab.Screen name="Cart" component={Home} options={{
                            tabBarIcon:({focused})=>{
                            return (<Image source={{uri:"https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-cart-shopping-actions-those-icons-lineal-those-icons-3.png"}} resizeMode="contain" style={{width:30,height:30}} />)
                            }
                        }} />

            <Tab.Screen name="Chat" component={Home} options={{
                            tabBarIcon:({focused})=>{
                            return (<Image source={{uri:"https://img.icons8.com/windows/32/000000/chat--v1.png"}} resizeMode="contain" style={{width:30,height:30}} />)
                            }
                        }} />
        </Tab.Navigator>
    )
}

export default Tabs;