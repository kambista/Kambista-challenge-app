import { View } from "react-native";
import { Tabs } from "../../atoms/tabs";

import { UseExchange } from "../../../hooks/useExhcange";
import { ExchangeInput } from "../../molecules/exchange-input";
import { Button } from "react-native-paper";
import { ExchanageFormFormStyleSheet } from "./styles";

export const ExchangeForm = () => {
  const {
    state,
    form,
    handlerOrder,
    tab,
    submit,
    handlerExchange,
    estimatedSaving,
    TABS,
  } = UseExchange();
  return (
    <View>
      <View className=" mt-10 rounded-xl flex-1 px-6">
        <Tabs tabs={TABS} active={tab} />
        <ExchangeInput
          changeType={form.isDollarToSole ? state.sell : state.buy}
          onChangeOrder={handlerOrder}
          onChangeBuy={handlerExchange}
          estimatedSaving={estimatedSaving}
          {...form}
        />
        <Button
          onPress={submit}
          buttonColor="#00E3C2"
          textColor="#060F26"
          contentStyle={[ExchanageFormFormStyleSheet.contentStyle]}
          style={ExchanageFormFormStyleSheet.button}
        >
          {"INICIAR OPERACIÓN"}
        </Button>
      </View>
    </View>
  );
};
