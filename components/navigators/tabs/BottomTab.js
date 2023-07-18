import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather";
import Home from "../../screens/Home";
import HomeStackNavigator from "../stack/HomeStack";
import Items from "../../screens/Items";
import Profile from "../../screens/Profile";
import Sales from "../../screens/Sales";
import { COLORS } from "../../../constants/theme";
const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({}) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {},
        tabBarActiveTintColor: COLORS.primary700,
        tabBarInactiveTintColor: COLORS.gray600,
      })}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          title: "Home",
          tabBarIcon: ({ size, color, focused }) => (
            <Icon
              name="home"
              color={focused ? COLORS.primary700 : COLORS.gray600}
              size={24}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Sales"
        component={Sales}
        options={{
          title: "Sales",
          tabBarIcon: ({ size, color, focused }) => (
            <Icon
              name="activity"
              color={focused ? COLORS.primary700 : COLORS.gray600}
              size={24}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Items"
        component={Items}
        options={{
          title: "Items",
          tabBarIcon: ({ size, color, focused }) => (
            <Icon
              name="package"
              color={focused ? COLORS.primary700 : COLORS.gray600}
              size={24}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          tabBarIcon: ({ size, color, focused }) => (
            <Icon
              name="user"
              color={focused ? COLORS.primary700 : COLORS.gray600}
              size={24}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;

//0719 707 235
//415 063 490
