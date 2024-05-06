import React from "react";
import Icon from "react-native-vector-icons/FontAwesome6";

const IconButton = ({ name, color, onPress, size }) => {
  return <Icon name={name} color={color} size={size} onPress={onPress} />;
};

export default IconButton;
