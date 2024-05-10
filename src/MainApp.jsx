import React, { useContext } from "react";
import { Text, View } from "react-native";
import { MainContext } from "./context";
import AppStack from "./stacks/AppStack";
import AuthStack from "./stacks/AuthStack";

const MainApp = () => {
  const { token } = useContext(MainContext);
  return token !== null ? <AppStack /> : <AuthStack />;
};

export default MainApp;
