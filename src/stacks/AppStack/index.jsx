import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import SearchStack from "../SearchStack";
import HistoryScreen from "../../screens/HistoryScreen";
import ChatScreen from "../../screens/Chat";
import ProfileScreen from "../../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Искать") {
              iconName = focused ? "search" : "search";
            } else if (route.name === "Поездки") {
              iconName = focused ? "history" : "history";
            } else if (route.name === "Входящие") {
              iconName = focused ? "wechat" : "wechat";
            } else {
              iconName = focused ? "user-circle-o" : "user-circle-o";
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            backgroundColor: "#131514",
            paddingBottom: 5,
          },
          tabBarActiveTintColor: "#0f95ca",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="Искать"
          component={SearchStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Поездки" component={HistoryScreen} />
        <Tab.Screen name="Входящие" component={ChatScreen} />
        <Tab.Screen name="Профиль" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
