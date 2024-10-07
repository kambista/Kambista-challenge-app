import { GestureResponderEvent, Pressable } from "react-native";
import PlusButton from "./../../../../assets/images/icons/plus-btn.svg";
export const ButtonPlus = ({
  onPress,
}: {
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
}) => {
  return (
    <Pressable onPress={onPress} className="absolute right-5 bottom-2">
      <PlusButton />
    </Pressable>
  );
};
