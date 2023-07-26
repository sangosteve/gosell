import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "../../components/navigators/tabs/BottomTab";
import AuthStack from "../../components/navigators/stack/AuthStack";
import { AuthContext } from "../../context/AuthContext";
import Loader from "../Loader";

const AppNav = () => {
  const { userToken, isLoading } = useContext(AuthContext);

  if (isLoading) return <Loader />;
  return (
    <NavigationContainer>
      {userToken !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNav;
