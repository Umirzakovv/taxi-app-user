import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Welcome from "../../screens/Welcome";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../../screens/LoginScreen";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "#131514" },
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
