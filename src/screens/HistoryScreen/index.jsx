import React from "react";
import { Dimensions, Text, View } from "react-native";

const HistoryScreen = () => {
  const screenHeight = Dimensions.get("window").height;
  return (
    <View style={{ height: screenHeight, backgroundColor: "#131514" }}>
      <Text>HistoryScreen</Text>
    </View>
  );
};

export default HistoryScreen;
