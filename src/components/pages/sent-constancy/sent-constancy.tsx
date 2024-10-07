import { View } from "react-native";
import { AppHeader } from "../../atoms/header";
import { ConstancyCard } from "../../organisms/constancy-card";

const SentConstancyPage = () => {
  return (
    <View className=" flex-1">
      <AppHeader logo />
      <View className="flex-1">
        <ConstancyCard />
      </View>
    </View>
  );
};
export default SentConstancyPage;
