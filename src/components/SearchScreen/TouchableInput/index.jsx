import React from "react";
import { styles } from "./styles";
import { Text, TouchableOpacity } from "react-native";

const TouchableInput = ({ onPress, title, value }) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
      <Text style={[styles.text, { color: "#0f95ca" }]}>{value}</Text>
    </TouchableOpacity>
  );
};

export default TouchableInput;
