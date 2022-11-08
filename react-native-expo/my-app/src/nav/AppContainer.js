import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import Item from "../pages/Item";
import List from "../pages/List";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Item" component={Item} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
