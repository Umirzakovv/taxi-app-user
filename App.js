import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import SearchScreen from "./src/screens/SearchScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import HistoryScreen from "./src/screens/HistoryScreen";

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
          })}
        >
          <Tab.Screen name="Искать" component={SearchScreen} />
          <Tab.Screen name="Поездки" component={HistoryScreen} />
          <Tab.Screen name="Профиль" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
