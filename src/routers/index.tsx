import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UseAuthContext } from "../contexts/auth/auth-hook";
import { AuthRouter } from "./auth-router";
import { ExchangeRouter } from "./exchange-router";
import { AccountsRouter } from "./accounts-router";
import { RootStackParamList } from "./interfaces";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RouterApp() {
  const { session } = UseAuthContext();
  if (!session) {
    return <AuthRouter />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="exchange"
          component={ExchangeRouter}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="accounts"
          component={AccountsRouter}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
