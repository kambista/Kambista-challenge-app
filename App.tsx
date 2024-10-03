import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { containerStyles, textStyles } from "./App.styles";

export default function App() {
  return (
    <SafeAreaView className={containerStyles}>
      <View>
        <Text className={textStyles}>2</Text>
      </View>
    </SafeAreaView>
  );
}
