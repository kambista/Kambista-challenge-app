import { StyleSheet, Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import AntDesign from "@expo/vector-icons/AntDesign";

interface KambistaSelectorProps {
  title?: string;
  items: any;
  style?: string;
  placeholder?: string;
  containerStyle?: string;
  onValueChange?: any;
}
export default function KambistaSelector({
  title,
  items,
  style,
  placeholder,
  containerStyle,
  onValueChange,
}: KambistaSelectorProps) {
  return (
    <View className={`${containerStyle}`}>
      {title && (
        <Text className={`font-montserrat-bold text-md mb-2 ${style}`}>
          {title}
        </Text>
      )}
      <View className="h-[46px] rounded-lg border border-gray-input-border bg-white-component">
        <RNPickerSelect
          placeholder={{
            label: placeholder,
            value: null,
          }}
          useNativeAndroidPickerStyle={false}
          Icon={() => (
            <View className="justify-center p-3.5">
              <AntDesign name="down" size={16} color="#686868" />
            </View>
          )}
          onValueChange={
            onValueChange
              ? (value) => onValueChange(value)
              : (value) => {
                  console.log(value);
                }
          }
          style={styles}
          items={items}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputIOS: {
    fontSize: 14,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontFamily: "Montserrat_400Regular",
  },
  inputAndroid: {
    fontSize: 14,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontFamily: "Montserrat_400Regular",
    color: "black",
    paddingRight: 10, // Para asegurar que el texto no se superponga con el icono de dropdown
  },
  placeholder: {
    color: "gray",
    fontSize: 14,
  },
});
