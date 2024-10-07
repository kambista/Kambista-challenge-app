import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExchangeAmountage from "../components/pages/exchange-amount/exchange-amount";
import SentConstancyPage from "../components/pages/sent-constancy/sent-constancy";
import SentConstancyCodePage from "../components/pages/sent-constancy-code/sent-constancy-code";
import { ExchangeProvider } from "../contexts/exchange/exchange-provider";
import { ExchangeDataPage } from "../components/pages/exchange-data/exchange-data";
import { ExchangeStackParamList } from "./interfaces";
import ExchangeResumenPage from "../components/pages/exchange-resumen/exchange-resumen";

const Stack = createNativeStackNavigator<ExchangeStackParamList>();

function ExchangeRouter() {
  return (
    <ExchangeProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="exchange-amount"
          component={ExchangeAmountage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="exchange-data"
          component={ExchangeDataPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="exchange-resumen"
          component={ExchangeResumenPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sent-constancy-code"
          component={SentConstancyCodePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="sent-constancy"
          component={SentConstancyPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </ExchangeProvider>
  );
}
export { ExchangeRouter };
