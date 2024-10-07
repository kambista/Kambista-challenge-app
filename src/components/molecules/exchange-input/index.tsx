import { Text, View, TextInput, Pressable } from "react-native";
import Exchange from "./../../../../assets/images/icons/exchange.svg";
import { ExchangeInputProps } from "./interface";
import { ExchangeInputConstants } from "./constants";

export const ExchangeInput = ({
  isDollarToSole,
  buyValue,
  onChangeBuy,
  onChangeSell,
  onChangeOrder,
  estimatedSaving,
  sellValue,
  changeType,
}: ExchangeInputProps) => {
  return (
    <View
      className={`bg-white relative h-[290px] rounded-bl-xl rounded-br-xl px-4 gap-6 flex-col justify-center`}
    >
      <View className="h-[70px] flex-row rounded-xl">
        <View className="bg-gray_1 px-4 flex-col gap-2 justify-center flex-1 rounded-tl-xl rounded-bl-xl">
          <Text>{ExchangeInputConstants.buyLabel}</Text>
          <TextInput
            inputMode="decimal"
            keyboardType="number-pad"
            placeholder="Ingresa el monto"
            value={buyValue}
            onChangeText={onChangeBuy}
          />
        </View>
        <View className="bg-black_1 min-w-[90px] flex items-center justify-center rounded-tr-xl rounded-br-xl">
          <Text className="text-white font-bold text-lg">
            {isDollarToSole
              ? ExchangeInputConstants.dollars
              : ExchangeInputConstants.soles}
          </Text>
        </View>
      </View>
      <Pressable
        onPress={onChangeOrder}
        className="absolute top-[56px] right-12 z-50"
      >
        <Exchange height={120} />
      </Pressable>
      <View className="h-[70px] flex-row rounded-xl">
        <View className="bg-gray_1 px-4 flex-col gap-2 justify-center flex-1 rounded-tl-xl rounded-bl-xl">
          <Text>{ExchangeInputConstants.sellLabel}</Text>
          <TextInput
            editable={false}
            inputMode="decimal"
            keyboardType="number-pad"
            className="font-bold"
            placeholder="Ingresa el monto"
            value={sellValue?.toLocaleString()}
            onChangeText={onChangeSell}
          />
        </View>
        <View className="bg-black_1 min-w-[90px] flex items-center justify-center rounded-tr-xl rounded-br-xl">
          <Text className="text-white font-bold text-lg">
            {!isDollarToSole
              ? ExchangeInputConstants.dollars
              : ExchangeInputConstants.soles}
          </Text>
        </View>
      </View>
      <View className="flex flex-row justify-between items-center">
        <View className="flex-col gap-2">
          <Text className="font-light">{"Ahorro estimado:"}</Text>
          <Text className="font-medium">{`S/ ${estimatedSaving}`}</Text>
        </View>
        <View className="flex-col gap-2 items-end">
          <Text className="font-light">{"Tipo de cambio:"}</Text>
          <Text className="font-medium">{changeType}</Text>
        </View>
      </View>
    </View>
  );
};
