import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/Sreens/LoginScreen";
import RegistrationScreen from "./src/Sreens/RegistrationScreen";
import { useFonts } from "expo-font";

// const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LoginScreen />
    // <RegistrationScreen />
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Login">
    //     <Stack.Screen name="Registration" component={RegistrationScreen} />
    //     <Stack.Screen name="Login" component={LoginScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}
