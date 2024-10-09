import { Text, TextInput, View } from "react-native";

type KambistaInputProps = {
  title?: string;
  placeholder?: string;
  numeric?: any;
  containerStyle?: string;
  textStyle?: string;
  inputStyle?: string;
  onChangeText?: any;
};
export default function KambistaInput({
  title,
  placeholder,
  numeric,
  containerStyle,
  onChangeText,
  textStyle,
  inputStyle,
}: KambistaInputProps) {
  return (
    <View className={`mb-6 min-w-[49%] ${containerStyle}`}>
      {title && (
        <Text className={`font-montserrat-bold text-md mb-2 ${textStyle}`}>
          {title}
        </Text>
      )}
      <TextInput
        keyboardType={numeric && "numeric"}
        placeholder={placeholder}
        className={`text-md h-[46px] rounded-lg pl-4 pr-4 font-montserrat-regular text-kambista-blue border border-gray-input-border bg-white-component ${inputStyle}`}
        onChangeText={onChangeText}
        returnKeyType="done"
      />
    </View>
  );
}
