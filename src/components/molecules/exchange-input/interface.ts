export interface ExchangeInputProps {
  isDollarToSole: boolean;
  buyValue?: string | undefined;
  estimatedSaving?: number | undefined;
  sellValue?: string | undefined;
  changeType?: number | undefined;
  onChangeBuy?: (value: string) => void;
  onChangeSell?: (value: string) => void;
  onChangeOrder?: () => void;
}
