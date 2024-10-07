export interface InputProps {
  onChangeText?: (((text: string) => void) & Function) | undefined;
  placeholer: string;
  label: string;
  value?: string | undefined;
  containerClassName?: string;
  error?: string;
}
