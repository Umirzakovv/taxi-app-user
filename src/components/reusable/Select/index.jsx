import React, { useState } from "react";
import { View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { styles } from "./style";

const Select = ({ data, placeholder, value, setValue }) => {
  return (
    <View style={styles.container}>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        searchPlaceholder="Поиск..."
        value={value}
        onChange={(item) => {
          setValue(item.value);
        }}
      />
    </View>
  );
};

export default Select;
