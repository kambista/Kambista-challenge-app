import axios from "axios";
import { API_URL } from "../util/constants";

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

      console.log("Response Data:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
    }
  }
}
