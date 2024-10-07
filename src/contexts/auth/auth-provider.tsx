import { useState } from "react";
import { AuthContext } from "./auth-context";
import { RegisterFormProps } from "../../hooks/useRegister/interface";
import { getStoreData, removeData, storeData } from "../../utils/asyncstorage";
import { AsyncStorageData } from "../../constants/async-storage";
import useMount from "../../hooks/useMount";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<RegisterFormProps | null>(null);
  const getProfile = async () => {
    const _data = await getStoreData<RegisterFormProps>(
      AsyncStorageData.session
    );
    if (_data) {
      setSession(_data);
    }
  };
  const setProfile = async (data: RegisterFormProps) => {
    storeData(AsyncStorageData.session, data);
    setSession(data);
  };
  const logout = () => {
    try {
      removeData(AsyncStorageData.session);
      setSession(null);
    } catch (error) {}
  };
  useMount(() => {
    getProfile();
  });
  return (
    <AuthContext.Provider value={{ session, getProfile, setProfile, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
