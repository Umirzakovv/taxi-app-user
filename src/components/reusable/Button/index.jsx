import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

const Button = ({ onPress, bgColor, title }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor: bgColor }]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
