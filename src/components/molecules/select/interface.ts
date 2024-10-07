import { GestureResponderEvent } from "react-native";
export interface SelectItemProps {
  label: string;
  value: string;
}
export interface SelectProps {
  data?: SelectItemProps[] | undefined;
  placeholder: string;
  containerClassName?: string | undefined;
  label: string;
  error?: string;
  value: SelectItemProps;
  setValue: (value: SelectItemProps) => void;
}
