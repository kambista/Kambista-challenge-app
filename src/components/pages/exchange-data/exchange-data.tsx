import { View } from "react-native";
import { AppHeader } from "../../atoms/header";
import { useRoute } from "@react-navigation/native";
import { ExchangeRouteProp } from "../../../routers/interfaces";
import Stepper from "../../molecules/stepper";
import { stepsDefault } from "../../../contexts/exchange/constants";
import { ExchangeDataForm } from "../../organisms/exchange-data-form";
import { UseExchangeContext } from "../../../contexts/exchange/exchange-hook";
import { UseUserContext } from "../../../contexts/user/user-hook";
import { useEffect } from "react";

export const ExchangeDataPage = () => {
  const { form, setForm } = UseExchangeContext();

  const route = useRoute<ExchangeRouteProp<"exchange-data">>();
  useEffect(() => {
    if (route.params?.value) {
      setForm({ ...form, accountSelected: route.params.value });
    }
  }, []);
  return (
    <View className=" flex-1">
      <AppHeader goBack close logo />
      <Stepper steps={stepsDefault} currentStep={0} />
      <View className="flex-1 px-8 pb-6">
        <ExchangeDataForm
          form={form}
          setForm={(v) => {
            setForm(v);
          }}
        />
      </View>
    </View>
  );
};
