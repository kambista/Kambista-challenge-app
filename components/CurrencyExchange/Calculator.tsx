import { Image, Text, TouchableOpacity, View } from "react-native";
import WhiteContainer from "../WhiteContainer";
import BoxBorder from "../BoxBorder";
import CurrencyBox from "./CurrencyBox";
import SubmitButton from "../SubmitButton";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useStore } from "../../store/store";
import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "https://api.kambista.com/v1/exchange/calculates";
export default function Calculator() {
  const nav = useNavigation();
  const [exchangeRateData, setExchangeRateData] = useState(null);
  const amount = parseFloat(useStore((state: any) => state.amount));
  const exchange = parseFloat(useStore((state: any) => state.exchange));
  const rate = parseFloat(useStore((state: any) => state.rate));
  const updateAmount = useStore((state: any) => state.updateAmount);
  const updateExchange = useStore((state: any) => state.updateExchange);
  const updateRate = useStore((state: any) => state.updateRate);
  const isExchangeBid = useStore((state: any) => state.isExchangeBid);
  const updateIsExchangeBid = useStore(
    (state: any) => state.updateIsExchangeBid
  );

  const simulateExchangeRate = async (
    originCurrency: string,
    destinationCurrency: string,
    amount: number
  ) => {
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
  };

  function updateRateExchange(data: any) {
    const { exchange, rate, savings } = data;
    //console.log("actualizando rate", amount, exchange, rate, savings);
    updateRate(rate);
  }

  const fetchExchangeRate = async () => {
    const data = await simulateExchangeRate(
      isExchangeBid ? "USD" : "PEN",
      isExchangeBid ? "PEN" : "USD",
      amount
    ); // Cambia los valores según tus necesidades
    await setExchangeRateData(data);
    await updateRateExchange(data);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("exbid", isExchangeBid);
      fetchExchangeRate();
      // console.log(
      //   "LLAMANDO CADA 10 sec, is exchangeBid",
      //   amount,
      //   isExchangeBid
      // );
    }, 8000); // Llamar a la API cada 5 segundos

    return () => {
      console.log("Limpiando el intervalo");
      clearInterval(interval);
    };
  }, [isExchangeBid]);

  useEffect(() => {
    console.log(
      "udpdateamos el bid, exchange",
      isExchangeBid,
      exchange,
      rate,
      exchangeRateData?.rate
    );
    isExchangeBid
      ? updateExchange((amount * rate).toFixed(2))
      : updateExchange((amount / rate).toFixed(2));
  }, [isExchangeBid, rate]);

  useEffect(() => {
    //console.log("LLAMANDO AQUI  AL PI");
    console.log("isExchangeBid inicial", isExchangeBid);
    fetchExchangeRate();
  }, [isExchangeBid]);

  function changeCurrencyType() {
    updateIsExchangeBid(!isExchangeBid);
  }
  const handleInputChange = (value: any) => {
    updateAmount(value);
    updateExchange((value * rate).toFixed(2));
  };

  const handleInputChangeInverse = (value: any) => {
    updateAmount((value / rate).toFixed(2));
    updateExchange(value);
  };

  return (
    <View className="mt-[50px]">
      <View className="flex-row pl-4 pr-4 mb-[1px]">
        <BoxBorder
          textStyle={`font-montserrat-bold text-[14px] ${
            !isExchangeBid && "text-disabled-component"
          }`}
          boxStyle={`bg-kambista-blue ${
            !isExchangeBid && "bg-white-component"
          } rounded-bl-none rounded-br-none`}
          title={`Compra: ${exchangeRateData?.tc?.bid}`}
        />
        <BoxBorder
          boxStyle={`bg-white-component ${
            !isExchangeBid && "bg-kambista-blue"
          } rounded-bl-none rounded-br-none`}
          textStyle={`text-disabled-component ${
            !isExchangeBid && "text-white-component"
          } font-montserrat-bold text-[14px]`}
          title={`Venta: ${exchangeRateData?.tc?.ask}`}
        />
      </View>
      <WhiteContainer style={"rounded-tr-none rounded-tl-none pt-8"}>
        <CurrencyBox
          title="¿Cuánto envías"
          currency={isExchangeBid ? "Dólares" : "Soles"}
          value={amount}
          handleInputChange={handleInputChange}
          type={"USD"}
        />
        <TouchableOpacity
          className="bg-circle-gray p-4 self-center rounded-full absolute bottom-[120px] right-[25%] z-10"
          onPress={changeCurrencyType}
        >
          <View className="bg-white-component p-2  self-center rounded-full">
            <AntDesign name="sync" size={25} color="black" />
          </View>
        </TouchableOpacity>
        <CurrencyBox
          title="Entonces recibes"
          currency={isExchangeBid ? "Soles" : "Dólares"}
          value={exchange}
          handleInputChange={handleInputChangeInverse}
        />
        <View className="flex-row justify-between pr-1 mt-2">
          <View>
            <Text className="font-montserrat-regular mb-1">
              Ahorro estimado:
            </Text>
            <Text className="font-montserrat-semibold">{`${
              isExchangeBid ? "$" : "S/"
            } ${exchangeRateData?.savings?.amount}`}</Text>
          </View>
          <View className="flex-end">
            <Text className="font-montserrat-regular mb-1">
              Tipo de cambio:
            </Text>
            <Text className="font-montserrat-semibold text-right">
              {exchangeRateData?.rate}
            </Text>
          </View>
        </View>
      </WhiteContainer>
      <SubmitButton
        style="p-4"
        text="INICIAR OPERACIÓN"
        onPress={() => nav.navigate("DataExchange" as never)}
      />
    </View>
  );
}
