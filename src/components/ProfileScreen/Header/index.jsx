import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./style";

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>Мухаммадёсин</Text>
        <Text style={styles.type}>Пользователь</Text>
      </View>
      <Icon name="user-circle-o" color="#fff" size={60} />
    </View>
  );
};

export default Header;
