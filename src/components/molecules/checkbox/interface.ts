import { GestureResponderEvent } from "react-native";

export interface CheckboxProps {
  label?: React.ReactNode;
  value?: boolean;
  error?: string;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
}
