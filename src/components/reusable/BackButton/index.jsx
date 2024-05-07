import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";
import IconButton from "../../reusable/IconButton/index";

const BackButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <IconButton name="arrow-left-long" color="#0f95ca" size={20} />
      <Text style={styles.text}>Назад</Text>
    </TouchableOpacity>
  );
};

export default BackButton;
