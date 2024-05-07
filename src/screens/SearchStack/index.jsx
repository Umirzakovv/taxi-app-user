import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../SearchScreen";
import OrderSingleScreen from "../OrderSingleScreen";
import OrdersListScreen from "../OrdersListScreen";

const Stack = createStackNavigator();
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
      <Stack.Screen name="OrdersListScreen" component={OrdersListScreen} />
      <Stack.Screen name="OrderSingleScreen" component={OrderSingleScreen} />
    </Stack.Navigator>
  );
};

export default SearchStack;
