import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import SearchScreen from "./src/screens/SearchScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import HistoryScreen from "./src/screens/HistoryScreen";
import ChatScreen from "./src/screens/Chat";
import StackScreen from "./src/screens/SearchStack";
import SearchStack from "./src/screens/SearchStack";

const Tab = createBottomTabNavigator();

export default function App() {
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
}
