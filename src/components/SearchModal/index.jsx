import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import HorizontalDivider from "../reusable/HorizontalDivider";

const SearchModal = () => {
  return (
    <View style={styles.inputSearchModal}>
      <View style={styles.inputWrapper}>
        <Icon name="circle-o" color="grey" size={25} />
        <TextInput
          placeholder="Откуда"
          style={styles.input}
          placeholderTextColor="grey"
        />
      </View>
      <HorizontalDivider space={15} />
      <View style={styles.inputWrapper}>
        <Icon name="circle-o" color="grey" size={25} />
        <TextInput
          placeholder="Куда"
          style={styles.input}
          placeholderTextColor="grey"
        />
      </View>
      <HorizontalDivider space={15} />
      <View style={styles.inputWrapper}>
        <Icon name="circle-o" color="grey" size={25} />
        <TextInput
          placeholder="Кол-во бронируемых мест"
          keyboardType="numeric"
          style={styles.input}
          placeholderTextColor="grey"
        />
      </View>
    </View>
  );
};

export default SearchModal;
