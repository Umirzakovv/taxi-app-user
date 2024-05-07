import React from "react";
import { Text, View } from "react-native";
import BackButton from "../../components/reusable/BackButton/index";
import { globalStyles } from "../../global-css";

const OrderSingleScreen = () => {
  return (
    <View style={globalStyles.mainContainer}>
      <BackButton />
      <Text style={{ color: "red" }}>Order Single screen</Text>
    </View>
  );
};

export default OrderSingleScreen;
