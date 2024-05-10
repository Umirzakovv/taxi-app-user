import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

const Input = ({ ...props }) => {
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        value={props?.value}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

export default Input;
