import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../../screens/SearchScreen";
import OrderSingleScreen from "../../screens/OrderSingleScreen";
import OrdersListScreen from "../../screens/OrdersListScreen";

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
