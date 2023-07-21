import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";
import SelectItemScreen from "../../screens/SelectItemScreen";
import SelectClientScreen from "../../screens/SelectClientScreen";
import CreateTransaction from "../../screens/CreateTransaction";
const Stack = createNativeStackNavigator();
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen
        name="CreateTransactionScreen"
        component={CreateTransaction}
      />
      <Stack.Screen name="SelectItemScreen" component={SelectItemScreen} />
      <Stack.Screen name="SelectClientScreen" component={SelectClientScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
