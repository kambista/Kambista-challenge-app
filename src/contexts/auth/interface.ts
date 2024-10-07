import { RegisterFormProps } from "../../hooks/useRegister/interface";

export interface AuthContextProps {
  session: RegisterFormProps | null;
  getProfile: () => void;
  setProfile: (data: RegisterFormProps) => void;
  logout: () => void;
}
