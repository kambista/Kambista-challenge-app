import { Text, View } from "react-native";
import WhiteContainer from "../WhiteContainer";
import BoxBorder from "../BoxBorder";
import CurrencyBox from "./CurrencyBox";
import SubmitButton from "../SubmitButton";
import { useNavigation } from "@react-navigation/native";

export default function Calculator() {
  const nav = useNavigation();
  return (
    <View className="mt-[50px]">
      <View className="flex-row pl-4 pr-4 mb-[1px]">
        <BoxBorder
          textStyle={"font-montserrat-bold text-[14px]"}
          boxStyle={"bg-kambista-blue rounded-bl-none rounded-br-none"}
          title="Compra: 3.321"
        />
        <BoxBorder
          boxStyle={"bg-white-component rounded-bl-none rounded-br-none "}
          textStyle={"text-disabled-component font-montserrat-bold text-[14px]"}
          title="Venta: 3.341"
        />
      </View>
      <WhiteContainer style={"rounded-tr-none rounded-tl-none pt-8"}>
        <CurrencyBox title="¿Cuánto envías" currency="Dólares" value={1000} />
        <CurrencyBox title="Entonces recibes" currency="Soles" value={332} />
        <View className="flex-row justify-between pr-1 mt-2">
          <View>
            <Text className="font-montserrat-regular mb-1">
              Ahorro estimado:
            </Text>
            <Text className="font-montserrat-semibold">$0.00</Text>
          </View>
          <View className="flex-end">
            <Text className="font-montserrat-regular mb-1">
              Tipo de cambio:
            </Text>
            <Text className="font-montserrat-semibold text-right">3.466</Text>
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
