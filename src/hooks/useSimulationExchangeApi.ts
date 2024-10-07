import axios from "axios";

export const UseSimulationExchangeApi = () => {
  const simulationForm = async (
    originCurrency: string,
    destinationCurrency: string,
    amount: string
  ) => {
    const currentAmount = amount.length > 0 ? amount : "0";
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(
          `https://api.kambista.com/v1/exchange/calculates?originCurrency=${originCurrency}&destinationCurrency=${destinationCurrency}&amount=${currentAmount}&active=S`
        );
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    });
  };
  return { simulationForm };
};
