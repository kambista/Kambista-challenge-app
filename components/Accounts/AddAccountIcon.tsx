import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function AddAccountIcon() {
  const nav = useNavigation();
  return (
    <TouchableOpacity
      className="items-end pb-[21px] pr-[35px]"
      onPress={() => nav.navigate("AddAccount" as never)}
    >
      <Ionicons name="add-circle" size={40} color="black" />
    </TouchableOpacity>
  );
}
