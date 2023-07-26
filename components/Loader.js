import { View, Text, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { COLORS } from "../constants/theme";

const Loader = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <ActivityIndicator size={"large"} color={COLORS.primary800} />
    </SafeAreaView>
  );
};

export default Loader;
