import { RegisterFormDefault } from "../../hooks/useRegister/constants";
import { AuthContextProps } from "./interface";

export const AuthContextDefault: AuthContextProps = {
  session: RegisterFormDefault,
  getProfile: () => {},
  setProfile: () => {},
  logout: () => {},
};
