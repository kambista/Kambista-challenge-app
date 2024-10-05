import { Text } from "react-native";
import { TEXT_TYPES } from "./constants";

export function getTexts(texts: any) {
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
