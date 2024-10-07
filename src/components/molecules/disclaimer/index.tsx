import { View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Text } from "react-native-paper";
import { DisclaimerStyleSheet } from "./styles";

const Disclaimer = ({
  text,
  color = "#456DD3CC",
}: {
  text: string;
  color?: string;
}) => {
  return (
    <View
      className="flex-row items-start gap-4 w-full my-4 rounded-lg"
      style={[DisclaimerStyleSheet.container]}
    >
      <AntDesign name="questioncircleo" size={24} color={"#082774"} />
      <Text
        className="flex-1 shrink"
        style={[DisclaimerStyleSheet.text, { color }]}
      >
        {text}
      </Text>
    </View>
  );
};

export default Disclaimer;
