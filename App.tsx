import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/home";
import LinkBank from "./screens/LinkBank";

export type RootStackParamList = {
  Home: undefined;
  LinkBank: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LinkBank" component={LinkBank} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
