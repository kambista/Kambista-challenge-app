import { Animated, Text, TouchableOpacity, View } from "react-native";
import WhiteContainer from "../WhiteContainer";
import BoxBorder from "../BoxBorder";
import CurrencyBox from "./CurrencyBox";
import SubmitButton from "../SubmitButton";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useStore } from "../../store/store";
import { useEffect, useRef, useState } from "react";
import { CalculatorApi } from "../../api/calculatorApi";

export default function Calculator() {
  const nav = useNavigation();
  const [exchangeRateData, setExchangeRateData]: any = useState(null);
  const amount = parseFloat(useStore((state: any) => state.amount));
  const exchange = parseFloat(useStore((state: any) => state.exchange));
  const rate = parseFloat(useStore((state: any) => state.rate));
  const savingsRate = parseFloat(useStore((state: any) => state.savingsRate));
  const isExchangeBid = useStore((state: any) => state.isExchangeBid);
  const updateAmount = useStore((state: any) => state.updateAmount);
  const updateExchange = useStore((state: any) => state.updateExchange);
  const updateRate = useStore((state: any) => state.updateRate);
  const updateSavingsRate = useStore((state: any) => state.updateSavingsRate);
  const updateIsExchangeBid = useStore(
    (state: any) => state.updateIsExchangeBid
  );
  const [ableToContinue, setAbleToContinue] = useState(true);
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const startRotation = () => {
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      rotateAnim.setValue(0);
    });
  };

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const animatedStyle = {
    transform: [{ rotate: rotateInterpolate }],
  };
  function changeCurrencyType() {
    startRotation();
    updateIsExchangeBid(!isExchangeBid);
  }

  const fetchExchangeRate = async () => {
    const data = await CalculatorApi.simulateExchangeRate(
      isExchangeBid ? "USD" : "PEN",
      isExchangeBid ? "PEN" : "USD",
      amount
    );
    setExchangeRateData(data);
    console.log("veamos data", data, rate);
    updateRate(data.rate);
    updateSavingsRate(data?.savings?.amount / amount);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchExchangeRate();
    }, 80000);
    return () => {
      clearInterval(interval);
    };
  }, [isExchangeBid]);

  useEffect(() => {
    isExchangeBid
      ? updateExchange((amount * rate).toFixed(2))
      : updateExchange((amount / rate).toFixed(2));
  }, [rate]);

  useEffect(() => {
    fetchExchangeRate();
  }, [isExchangeBid]);

  const handleInputChange = (value: any) => {
    console.log("veamos value", value);
    if (value === "" || value < 1) {
      setAbleToContinue(false);
      updateAmount(0);
    } else {
      setAbleToContinue(true);
      updateAmount(value);
    }
    isExchangeBid
      ? updateExchange((value * rate).toFixed(2))
      : updateExchange((value / rate).toFixed(2));
  };

  const handleInputChangeInverse = (value: any) => {
    if (value === "" || value < 1) {
      setAbleToContinue(false);
      updateExchange(0);
    } else {
      setAbleToContinue(true);
      updateExchange(value);
    }
    isExchangeBid
      ? updateAmount((value / rate).toFixed(2))
      : updateAmount((value * rate).toFixed(2));
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
          onPress={() => {
            !isExchangeBid && startRotation(), updateIsExchangeBid(true);
          }}
        />
        <BoxBorder
          boxStyle={`bg-white-component ${
            !isExchangeBid && "bg-kambista-blue"
          } rounded-bl-none rounded-br-none`}
          textStyle={`text-disabled-component ${
            !isExchangeBid && "text-white-component"
          } font-montserrat-bold text-[14px]`}
          title={`Venta: ${exchangeRateData?.tc?.ask}`}
          onPress={() => {
            isExchangeBid && startRotation();
            updateIsExchangeBid(false);
          }}
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
          <Animated.View
            className="bg-white-component p-2  self-center rounded-full"
            style={animatedStyle}
          >
            <AntDesign name="sync" size={25} color="black" />
          </Animated.View>
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
            } ${(savingsRate * amount).toFixed(2)}`}</Text>
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
        disabled={!ableToContinue}
        onPress={() => nav.navigate("DataExchange" as never)}
      />
    </View>
  );
}
