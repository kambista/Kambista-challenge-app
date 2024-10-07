import { useState } from "react";
import { UserContext } from "./user-context";
import { RegisterAccountsFormProps } from "../../hooks/useRegisterAccount/interface";
import { getStoreData, storeData } from "../../utils/asyncstorage";
import { AsyncStorageData } from "../../constants/async-storage";
import useMount from "../../hooks/useMount";

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userAccounts, setUserAccounts] = useState<RegisterAccountsFormProps[]>(
    []
  );
  const setAccounts = (newAccount: RegisterAccountsFormProps) => {
    const newList = [...userAccounts, newAccount];
    setUserAccounts((prevAccounts) => [...prevAccounts, newAccount]);
    storeData(AsyncStorageData.accounts, newList);
    getAccounts();
  };
  const getAccounts = async () => {
    const _data = await getStoreData<RegisterAccountsFormProps[]>(
      AsyncStorageData.accounts
    );
    if (_data) {
      setUserAccounts(_data);
    }
  };

  useMount(() => {
    getAccounts();
  });

  return (
    <UserContext.Provider
      value={{
        accounts: userAccounts,
        setAccounts,
        getAccounts,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
