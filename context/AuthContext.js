import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const login = async () => {
    setUserToken("ZSE4XDR5CFT6");
    if (userToken !== null) {
      await AsyncStorage.setItem("userToken", userToken);
    }

    setIsLoading(false);
  };

  const logout = () => {
    setUserToken(null);
    AsyncStorage.removeItem("userToken");
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem("userToken");
      setUserToken(userToken);
      setIsLoading(false);
    } catch (err) {
      console.log("Sign in error", err);
    }
  };
  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <AuthContext.Provider value={{ login, userToken, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
