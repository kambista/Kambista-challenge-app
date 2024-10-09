import { Text, View } from "react-native";

interface TransactionInfoTextProps {
  text: string;
  currency: string;
  amount: number;
  cointainerStyle?: string;
}
export default function TransactionInfoText({
  text,
  currency,
  amount,
  cointainerStyle,
}: TransactionInfoTextProps) {
  return (
    <View className={`flex-row justify-between ${cointainerStyle}`}>
      <Text className="font-montserrat-regular text-[16px] mb-2.5">{text}</Text>
      <Text className="font-montserrat-bold text-[16px]">
        {currency}
        {amount.toFixed(2)}
      </Text>
    </View>
  );
}
