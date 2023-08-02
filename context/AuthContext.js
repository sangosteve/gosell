import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const login = async (email, password) => {
    var data = JSON.stringify({ email: email, password: password });

    var config = {
      method: "post",
      url: "http:192.168.1.249:2023/auth/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    await axios(config)
      .then(async function (response) {
        console.log(response.data);
        setUserToken(response.data?.token);
        if (userToken !== null) {
          await AsyncStorage.setItem("token", userToken);
        }
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const register = async (username, email, password) => {
    var data = JSON.stringify({
      username: username,
      email: email,
      password: password,
    });

    var config = {
      method: "post",
      url: "http:192.168.1.249:2023/auth/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    await axios(config)
      .then(async function (response) {
        console.log(response.data);
        setUserToken(response.data?.token);
        if (userToken !== null) {
          await AsyncStorage.setItem("token", userToken);
        }
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const logout = () => {
    setUserToken(null);
    AsyncStorage.removeItem("token");
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem("token");
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
    <AuthContext.Provider value={{ register, login, userToken, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
