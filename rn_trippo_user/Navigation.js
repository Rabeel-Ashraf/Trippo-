import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import GreenBeanOrderScreen from "./screens/GreenBeanOrderScreen";
import OrderConfirmationScreen from "./screens/OrderConfirmationScreen";
import ActiveGreenBeanScreen from "./screens/ActiveGreenBeanScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PastDeliveriesScreen from "./screens/PastDeliveriesScreen";
import SupportScreen from "./screens/SupportScreen";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GreenBeanOrder" component={GreenBeanOrderScreen} />
        <Stack.Screen name="OrderConfirmation" component={OrderConfirmationScreen} />
        <Stack.Screen name="ActiveGreenBean" component={ActiveGreenBeanScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="PastDeliveries" component={PastDeliveriesScreen} />
        <Stack.Screen name="Support" component={SupportScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
