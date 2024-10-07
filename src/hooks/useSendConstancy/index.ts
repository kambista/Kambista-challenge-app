import { useState } from "react";
import { isValidConstancyCode } from "../../utils/regex";
import { useNavigation } from "@react-navigation/native";

export const UseSendConstancy = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const submit = () => {
    if (!isValidConstancyCode(code)) {
      setError("Ingresa un codigo valido");
      return;
    }
    navigation.navigate("sent-constancy");
  };
  return { code, error, setError, setCode, submit };
};
