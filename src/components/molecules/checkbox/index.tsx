import { Pressable, View, Text } from "react-native";
import { CheckboxProps } from "./interface";
import { CheckboxStyleSheet } from "./style";
import AntDesign from "@expo/vector-icons/AntDesign";

const Checkbox = ({ value, onPress, label, error }: CheckboxProps) => {
  return (
    <View style={CheckboxStyleSheet.container}>
      <Pressable
        style={[
          CheckboxStyleSheet.box,
          error
            ? CheckboxStyleSheet.boxError
            : value
            ? CheckboxStyleSheet.boxSelected
            : CheckboxStyleSheet.boxNoSelected,
        ]}
        onPress={onPress}
      >
        <AntDesign name="check" size={16} color={value ? "#456DD3" : "#eee"} />
      </Pressable>
      <View className="shrink">{label}</View>
    </View>
  );
};
export default Checkbox;
