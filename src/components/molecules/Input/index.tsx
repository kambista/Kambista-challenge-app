import { Text, TextInput } from "react-native-paper";
import { RegisterFormConfig } from "./configurations";
import { InputStyleSheet } from "./styles";
import { InputProps } from "./interface";
import { View } from "react-native";

const Input = ({
  onChangeText,
  placeholer,
  label,
  value,
  containerClassName,
  error,
}: InputProps) => {
  return (
    <View className={containerClassName}>
      {label && (
        <Text
          style={
            error ? InputStyleSheet.labelError : InputStyleSheet.labelCommon
          }
          className="mb-2"
        >
          {label}
        </Text>
      )}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholer}
        mode="outlined"
        className="rounded-xl"
        contentStyle={InputStyleSheet.contentStyle}
        outlineStyle={[
          InputStyleSheet.inputOutline,
          error ? InputStyleSheet.error : InputStyleSheet.common,
        ]}
        {...RegisterFormConfig}
      />
    </View>
  );
};
export default Input;
