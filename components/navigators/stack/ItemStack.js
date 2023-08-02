import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Items from "../../screens/Items";
import CreateItem from "../../screens/CreateItem";
const Stack = createNativeStackNavigator();

const ItemStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="ItemScreen" component={Items} />

      <Stack.Screen name="CreateItemScreen" component={CreateItem} />
    </Stack.Navigator>
  );
};

export default ItemStackNavigator;
