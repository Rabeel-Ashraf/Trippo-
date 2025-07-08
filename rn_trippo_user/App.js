import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GreenBeanOrderScreen from "./screens/GreenBeanOrderScreen";
import OrderConfirmationScreen from "./screens/OrderConfirmationScreen";
import ActiveGreenBeanScreen from "./screens/ActiveGreenBeanScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PastDeliveriesScreen from "./screens/PastDeliveriesScreen";
import SupportScreen from "./screens/SupportScreen";
import HomeScreen from "./screens/HomeScreen";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

import AnimatedForm from "react-native-animated-form";
import Navigation from "./Navigation";

const AnimatedInput = Animated.createAnimatedComponent(TextInput);
const Stack = createStackNavigator();
const Background =
  "https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?q=80&w=2830&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


export default function App() {
  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#919191",
  },
  text: {
    width: 250,
    height: 35,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#FFF",
    color: "#333",
    backgroundColor: "#FFF",
  },
  buttonView: {
    height: 40,
    marginTop: 10,
    backgroundColor: "tomato",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
