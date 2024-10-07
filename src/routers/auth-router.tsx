import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterPage from "../components/pages/register";

const Stack = createNativeStackNavigator();

function AuthRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="register"
          component={RegisterPage}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export { AuthRouter };
