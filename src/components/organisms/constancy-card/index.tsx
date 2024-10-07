import { Pressable, ScrollView, Text, View } from "react-native";
import { ConstancyCardStyleSheet } from "./style";
import MoneyCerdito from "./../../../../assets/images/icons/monedas-cerdito.svg";
import Star from "./../../../../assets/images/icons/star.svg";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { UseExchange } from "../../../hooks/useExhcange";

export const ConstancyCard = () => {
  const navigation = useNavigation();
  const { reset } = UseExchange();
  return (
    <View className="mx-6 flex-1 pb-4">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          className="flex-col bg-white justify-center items-center pb-8"
          style={ConstancyCardStyleSheet.card}
        >
          <MoneyCerdito />
          <View className="w-full px-5 flex-col gap-3">
            <Text className="text-center font-bold text-xl">
              {"¡Constancia enviada!"}
            </Text>
            <View className="bg-[#A7A7A7] h-[1px] w-full" />
            <Text className="text-[#686868] text-sm font-bold">
              {"Código Kambista"}
            </Text>
            <Text className="text-[#060F26] text-base font-bold">
              {"km20ttfff"}
            </Text>
            <Text className="text-[#060F26] text-sm font-light">
              {"*Usa tu código para dar seguimiento a tu operación."}
            </Text>
            <Text className="text-[#686868] text-sm font-bold">
              {"Monto a recibir "}
            </Text>
            <Text className="text-[#060F26] text-base font-bold">
              {"S/ 343.00"}
            </Text>
            <Text className="text-[#686868] text-sm font-bold">
              {"Tiempo estimado de espera"}
            </Text>
            <Text className="text-[#060F26] text-base font-bold">
              {"1 día útil"}
            </Text>
          </View>
        </View>
        <View className="flex-row items-center justify-center gap-4 my-4">
          <Star />
          <Text className="text-base font-normal underline">
            {"Recomienda y gana"}
          </Text>
        </View>
        <Text className="text-center mx-6 font-light mt-2 mb-6">
          {
            " Verificaremos tu operación. Puedes ver su estado en “Operaciones”."
          }
        </Text>
        <Button
          onPress={() => {
            navigation.navigate("exchange-amount");
          }}
          buttonColor="#00E3C2"
          textColor="#060F26"
          style={ConstancyCardStyleSheet.style_button}
          contentStyle={ConstancyCardStyleSheet.contentStyle_button}
        >
          {"IR A MIS OPERACIONES"}
        </Button>
        <Pressable
          onPress={() => {
            reset();
            navigation.navigate("exchange-amount");
          }}
        >
          <Text className="underline text-center font-semibold my-6">
            {"Volver al Inicio"}
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};
