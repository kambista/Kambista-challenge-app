import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountsPage from "../components/pages/accounts/accounts";
import RegisterAccountPage from "../components/pages/register-account/register-account";

const Stack = createNativeStackNavigator();

function AccountsRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="accounts-list"
        component={AccountsPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="accounts-register"
        component={RegisterAccountPage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
export { AccountsRouter };
