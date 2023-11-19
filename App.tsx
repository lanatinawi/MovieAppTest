//importing 
import React from "react";
//import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Currently unused libraries/imports
//import styles from "./StyleSheets/navstyles"; 
//import { SafeAreaViewComponent } from "react-native"; //avoid displaying text in notch
//import { Icon } from '@rneui/themed';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; //icons

//Importing pages to link them w/ respective tab
import Feed from "./Screens/Home";
import ProfilePage from "./Screens/ProfilePage";
import FriendsPage from "./Screens/Friends";
import SettingsPage from "./Screens/Settings";


//creating the tab navigator
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#0818A8',
      }}
      
    >
    
      <Tab.Screen
        name="News Feed"
        component={Feed}
        options={{
          tabBarLabel: 'News Feed',
          
         
        }}
      />
      <Tab.Screen
        name="Friends"
        component={FriendsPage}
        options={{
          tabBarLabel: 'Friends',
         
        }}
      />
  
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarLabel: 'Profile',
         
        }}
      />

      <Tab.Screen
              name="Settings"
              component={SettingsPage}
              options={{
                tabBarLabel: 'Settings',
              
              }}
              />
      
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}


