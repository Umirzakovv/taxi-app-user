import React from "react";
import { View } from "react-native";
import { styles } from "./style";

const HorizontalDivider = ({ space }) => {
  return (
    <View style={[styles.divider, { marginTop: space, marginBottom: space }]} />
  );
};

export default HorizontalDivider;
