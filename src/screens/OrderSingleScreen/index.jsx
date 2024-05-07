import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import BackButton from "../../components/reusable/BackButton/index";

const OrderSingleScreen = () => {
  return (
    <View style={styles.wrapper}>
      <BackButton />
      <Text style={{ color: "red" }}>Order Single screen</Text>
    </View>
  );
};

export default OrderSingleScreen;
