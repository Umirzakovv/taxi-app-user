import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OrdersList from "../OrdersList";
import SearchScreen from "../SearchScreen";

const Stack = createStackNavigator()
const SearchStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SearchScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "#131514" },
      }}
    >
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="OrdersList" component={OrdersList} />
    </Stack.Navigator>
  );
};

export default SearchStack;
