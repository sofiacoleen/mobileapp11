import "react-native-gesture-handler";

// Import React and Component
import React, { Component } from "react";
import {StackNavigator} from 'react-navigation';

// Import Navigators from React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import Screens
import LoginScreen from "./screens/LoginScreen";
import Profile from "./screens/Profile"
import RegisterScreen from "./screens/RegisterScreen";
import { MainLayout } from "./screens";

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const Stack = createStackNavigator();

/*const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: "Register", //Set Header Title
          headerStyle: {
            backgroundColor: "#307ecc", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};*/

/* Main Navigator */
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="LoginScreen">
    <Stack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="RegisterScreen"
      component={RegisterScreen}
      options={{
        title: "Register", //Set Header Title
        headerStyle: {
          backgroundColor: "#307ecc", //Set Header color
        },
        headerTintColor: "#fff", //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}
    />
        <Stack.Screen
          name="MainLayout"
          component={MainLayout}
          options={{
            title: "Profile", //Set Header Title
            headerStyle: {
              backgroundColor: "#307ecc", //Set Header color
            },
            headerTintColor: "#fff", //Set Header text color
            headerTitleStyle: {
              fontWeight: "bold", //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;