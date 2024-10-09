import { Text, TextInput, View } from "react-native";
import { useStore } from "../../store/store";

export default function CurrencyBox({
  title,
  currency,
  handleInputChange,
  type,
}: any) {
  const amount = parseFloat(useStore((state: any) => state.amount));
  const exchange = parseFloat(useStore((state: any) => state.exchange));

  return (
    <View className="flex-row mb-2.5">
      <View className="bg-gray-component w-[70%] rounded-tl-xl rounded-bl-xl pt-[10px] pl-[19px] pb-4">
        <Text className="font-montserrat-regular text-kambista-blue text-[14px] ">
          {title}
        </Text>
        <TextInput
          keyboardType="decimal-pad"
          className="font-montserrat-bold text-kambista-blue text-[20px]"
          onChangeText={handleInputChange}
          returnKeyType="done"
        >
          {type === "USD" ? amount : exchange}
        </TextInput>
      </View>
      <View className="bg-kambista-blue rounded-tr-xl w-[30%] rounded-br-xl justify-center ">
        <Text className="font-montserrat-bold text-white-component text-[16px] p-4 self-center">
          {currency}
        </Text>
      </View>
    </View>
  );
}
