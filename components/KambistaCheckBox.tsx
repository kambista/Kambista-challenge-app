import { useState } from "react";
import { Pressable, Text, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TEXT_TYPES } from "../util/constants";

export default function KambistaCheckBox({ style, texts }: any) {
  const [checked, setChecked] = useState(false);

  function getTexts(texts: any) {
    return texts.map((t: any) => {
      const types = t.textStyles;
      return (
        <Text
          key={t.text}
          className={`font-montserrat-${
            types.includes("bold") ? "bold" : "regular"
          } ${types.includes(TEXT_TYPES.UNDERLINE) && TEXT_TYPES.UNDERLINE}`}
        >
          {t.text}
        </Text>
      );
    });
  }

  return (
    <TouchableOpacity
      className={`flex-row items-center mb-4 ${style}`}
      onPress={() => setChecked(!checked)}
    >
      <Pressable
        className={`border-2 border-gray-500 w-[19px] h-[19px] rounded-md mr-3 ${
          checked && "bg-kambista-blue border-kambista-blue"
        }`}
      >
        <Text className="font-montserrat-semibold text-kambista-blue">
          {checked && <FontAwesome name="check" size={14} color="white" />}
        </Text>
      </Pressable>
      <Text className="flex-1">{texts && getTexts(texts)}</Text>
    </TouchableOpacity>
  );
}
