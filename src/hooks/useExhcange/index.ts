import { useState } from "react";
import { TabProps } from "../../components/atoms/tabs/interface";
import { useNavigation } from "@react-navigation/native";
import { UseExchangeContext } from "../../contexts/exchange/exchange-hook";
import { UseSimulationExchangeApi } from "../useSimulationExchangeApi";
import useMount from "../useMount";

const defaultTypeExchange = 3.72;

export const UseExchange = () => {
  const { simulationForm } = UseSimulationExchangeApi();
  const { form, setForm } = UseExchangeContext();
  const router = useNavigation();
  const [tab, setTab] = useState("2");
  const [state, setState] = useState({ buy: 3.62, sell: 3.84 });
  const [estimatedSaving, setEstimatedSavings] = useState(0);
  const TABS: TabProps[] = [
    {
      id: "2",
      name: `Compra ${state.buy}`,
      className: `rounded-tl-xl rounded-tr-xl`,
    },
    {
      id: "1",
      name: `Venta ${state.sell}`,
      className: `rounded-tl-xl rounded-tr-xl`,
    },
  ];
  const handlerOrder = async () => {
    const newState = !form.isDollarToSole;
    setForm({ ...form, isDollarToSole: newState });
    try {
      const response: any = await simulationForm(
        newState ? "USD" : "PEN",
        newState ? "PEN" : "USD",
        form.buyValue ?? "0"
      );
      setState({ buy: response?.tc?.bid || 0, sell: response?.tc?.ask || 0 });
      setForm({
        ...form,
        sellValue: response?.exchange || "0",
        isDollarToSole: newState,
        currency: response?.savings?.currency || "$",
      });
      setEstimatedSavings(response?.savings?.amount || "0");
    } catch (error) {
      console.log(error);
    }
    setTab(newState ? "1" : "2");
  };
  const handlerExchange = async (value: string) => {
    if (!value) {
      setForm({ ...form, buyValue: "" });
      setEstimatedSavings(0);
      return;
    }
    setForm({
      ...form,
      buyValue: value,
    });
    try {
      const response: any = await simulationForm(
        form.isDollarToSole ? "USD" : "PEN",
        form.isDollarToSole ? "PEN" : "USD",
        value ?? "0"
      );
      setState({ buy: response?.tc?.bid || 0, sell: response?.tc?.ask || 0 });
      setForm({
        ...form,
        sellValue: response?.exchange || "0",
        buyValue: value,
        currency: response?.savings?.currency || "$",
      });
      setEstimatedSavings(response?.savings?.amount || "0");
    } catch (error) {
      console.log(error);
    }
  };
  const submit = async () => {
    try {
      router.navigate("accounts");
    } catch (error) {}
  };
  const reset = () => {
    defaultvalues();
  };
  const defaultvalues = async () => {
    const response: any = await simulationForm("PEN", "USD", "0");
    setState({ buy: response?.tc?.bid || 0, sell: response?.tc?.ask || 0 });
    setForm({
      sellValue: response?.exchange || "0",
      accounts: { label: "", value: "" },
      bank: { label: "", value: "" },
      originFounds: { label: "", value: "" },
      buyValue: "",
      accountSelected: { label: "", value: "" },
      isDollarToSole: false,
      currency: response?.savings?.currency || "$",
    });
    setEstimatedSavings(response?.savings?.amount || "0");
  };

  useMount(defaultvalues);

  return {
    state,
    form,
    setForm,
    handlerOrder,
    tab,
    setTab,
    TABS,
    handlerExchange,
    estimatedSaving,
    submit,
    reset,
  };
};
