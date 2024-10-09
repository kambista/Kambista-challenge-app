import { Text } from "react-native";

export default function TimeToChange({ time }: any) {
  return (
    <Text className="font-montserrat-regular text-gray-input text-md self-center mt-5">
      {"El tipo de cambio podría actualizar a la(s) "}
      <Text className="text-gray-input font-montserrat-bold">{time}</Text>
    </Text>
  );
}
