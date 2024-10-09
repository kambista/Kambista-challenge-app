import axios from "axios";
import { API_URL } from "../util/constants";
import { Alert } from "react-native";

export class CalculatorApi {
  static async simulateExchangeRate(
    originCurrency: string,
    destinationCurrency: string,
    amount: number
  ) {
    try {
      const response = await axios.get(API_URL, {
        params: {
          originCurrency,
          destinationCurrency,
          amount,
          active: "S",
        },
      });
      return response.data;
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  }
}
