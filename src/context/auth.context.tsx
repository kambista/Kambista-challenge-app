import React, { useState } from "react";

interface AuthContextProps {
	user: UserContextProps | null;
	handleSaveUser: (info: UserContextProps) => void;
}

interface UserContextProps {
	name: string;
	typeDocument: number;
	numDocument: string;
	phone: string;
	otherComnpany: number;
}

const initialValuesContext = {
	user: null,
	handleSaveUser: () => {},
};

export const AuthContext =
	React.createContext<AuthContextProps>(initialValuesContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<UserContextProps | null>(null);

	const handleSaveUser = (parameter: UserContextProps) => {
		setUser(parameter);
	};

	const value: AuthContextProps = {
		user,
		handleSaveUser,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
