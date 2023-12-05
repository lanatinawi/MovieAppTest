//imports
import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
//import Home from './src/Home';
// import Constants from './src/Constants'



//Currently unused libraries/imports
import styles from "./StyleSheets/navstyles.js"; 
//import { SafeAreaViewComponent } from "react-native"; //avoid displaying text in notch


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
        tabBarActiveTintColor: '#0818A8', //icon/text color when pressed on 
        tabBarInactiveTintColor:'#000',//icon/text color when no on particulat screen  
        tabBarActiveBackgroundColor:'#D6DBDF', //tab shade color when on a clicked screen 
      }}
      
    >
    
      <Tab.Screen
        name="News Feed" //this is the top header of the page 
        component={Feed}
        options={{
          tabBarLabel: 'News Feed',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold', // this makes the tab label bold (independent)
          },
          tabBarIcon: ({ color, size }) => (
             <Icon name="newspaper" size={30} color="#000" /> // Change the color
            ),
        }}

      />
      <Tab.Screen
        name="Friends"
        component={FriendsPage}
        options={{
          tabBarLabel: 'Friends',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold', // this makes the tab label bold (independent)
          },
          tabBarIcon: ({ color, size }) => (
            <Icon name="people" size={30} color="#000" /> // Change the color
           ),
         
        }}
      />
  
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarLabel: 'Profile',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold', // this makes the tab label bold (independent)
          },
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" size={30} color="#000" /> // Change the color
           ),
         
        }}
      />

      <Tab.Screen
              name="Settings"
              component={SettingsPage}
              options={{
                tabBarLabel: 'Settings',
                tabBarLabelStyle: {
                  fontSize: 12,
                  fontWeight: 'bold', // this makes the tab label bold (independent)
                },
                tabBarIcon: ({ color, size }) => (
                  <Icon name="settings" size={30} color="#000" /> // Change the color
                 ),
              
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

// const headerStyle = {
//   title: 'The Movie App',
//   headerStyle: {backgroundColor:Constants.baseColor},
//   headerTitleStyle:{color: Constants.textColor },
//   // headerLeft: () => <Icon name="menu" size={28} 
//   // color={Constants.textColor}/>,
//   headerRight: () => <Icon name="search" size={28} 
//   color={Constants.textColor}/>

// };

