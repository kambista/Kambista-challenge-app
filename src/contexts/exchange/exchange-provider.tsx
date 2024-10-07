import { useState } from "react";
import { ExchangeContext } from "./exchange-context";
import { ExchangeDataFormProps } from "./interface";
import { ExchangeContextDefault } from "./constants";

export const ExchangeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [form, setForm] = useState<ExchangeDataFormProps>(
    ExchangeContextDefault.form
  );
  return (
    <ExchangeContext.Provider value={{ form, setForm }}>
      {children}
    </ExchangeContext.Provider>
  );
};
