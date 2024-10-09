import { Image, Text, View } from "react-native";
import KambistaBackground from "../components/KambistaBackground";
import WhiteContainer from "../components/WhiteContainer";
import KambistaInput from "../components/KambistaInput";
import InfoBox from "../components/InfoBox";
import SubmitButton from "../components/SubmitButton";
import { useNavigation } from "@react-navigation/native";
import { TEXT_CONSTANTS } from "../util/constants";
import { useStore } from "../store/store";
import { useState } from "react";
import ScreenTitle from "../components/ScreenTitle";

export default function Voucher() {
  const nav = useNavigation();
  const exchange = useStore((state: any) => state.exchange);
  const isExchangeBid = useStore((state: any) => state.isExchangeBid);
  const [operationCode, setOperationCode] = useState();

  function handleInputChange(value: any) {
    setOperationCode(value);
  }

  return (
    <KambistaBackground style="bg-white-background" step={3}>
      <WhiteContainer style="mt-7 p-6 border border-gray-200 pb-[51px]">
        <Image
          className="self-center w-[48px] h-[53px]"
          source={require("../assets/Voucher.png")}
        />
        <ScreenTitle title="Envía tu constancia" textStyle="mt-3 mb-6" />
        <Text className="font-montserrat-regular text-[16px] mb-3 ">
          Escribe el{" "}
          <Text className="font-montserrat-semibold text-kambista-blue">
            código de operación{" "}
          </Text>{" "}
          del banco aquí:
        </Text>
        <KambistaInput
          numeric
          onChangeText={handleInputChange}
          containerStyle="mb-3"
          inputStyle="text-center font-montserrat-semibold text-[16px]"
        />
        <InfoBox
          style="p-0 items-center"
          infoStyle="text-[12px]"
          imageStyle="w-5 h-5"
          texts={TEXT_CONSTANTS.WhereIsTheCode}
        />
        <Text className="font-montserrat-regular text-gray-input text-[15px] mt-6 pr-7">
          Verificaremos tu operación para depositar{" "}
          <Text className="font-montserrat-semibold text-kambista-blue">
            {!isExchangeBid ? "$ " : "S/ "}
            {exchange}
          </Text>
          {" a tu cuenta."}
        </Text>
      </WhiteContainer>
      <Text className="font-montserrat-bold text-gray-input text-md self-center mt-3 text-center underline">
        Detalle de su operación
      </Text>
      <View className="flex-row justify-center p-4 mt-[100px]">
        <SubmitButton
          text="ENVÍA TU CONSTANCIA"
          onPress={() => nav.navigate("VoucherSent" as never)}
          disabled={!operationCode}
        />
      </View>
    </KambistaBackground>
  );
}
