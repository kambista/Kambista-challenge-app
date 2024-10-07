import { View, Text } from "react-native";
import { TransferCardProps } from "./interface";

export const TransferCard = ({
  accountNumber,
  accountType,
  amount,
  bank,
  identifier,
  identifierType,
  name,
}: TransferCardProps) => {
  return (
    <View className="flex-col gap-2">
      <View className="flex-col gap-2">
        <Text className=" font-bold text-[#686868] text-sm">{"Banco"}</Text>
        <Text className="font-bold text-sm text-[#060F26]">{bank}</Text>
      </View>
      <View>
        <Text className=" font-bold text-[#686868] text-sm">{"Monto"}</Text>
        <Text className="font-bold text-sm text-[#060F26]">{`S/ ${amount}`}</Text>
      </View>
      <View>
        <Text className=" font-bold text-[#686868] text-sm">
          {"Número de cuenta"}
        </Text>
        <Text className="font-bold text-sm text-[#060F26]">
          {accountNumber}
        </Text>
      </View>
      <View>
        <Text className=" font-bold text-[#686868] text-sm">
          {identifierType}
        </Text>
        <Text className="font-bold text-sm text-[#060F26]">{identifier}</Text>
      </View>
      <View>
        <Text className=" font-bold text-[#686868] text-sm">
          {"Titular de la cuenta"}
        </Text>
        <Text className="font-bold text-sm text-[#060F26]">{name}</Text>
      </View>
      <View>
        <Text className=" font-bold text-[#686868] text-sm">
          {"Tipo de cuenta"}
        </Text>
        <Text className="font-bold text-sm text-[#060F26]">{accountType}</Text>
      </View>
    </View>
  );
};
