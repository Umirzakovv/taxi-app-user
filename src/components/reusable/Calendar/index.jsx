import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Calendar = () => {
  return (
    <TouchableOpacity style={styles.orderView}>
      <Text style={styles.text}>Выберите время</Text>
      <Text style={[styles.text, { color: "#0f95ca" }]}>Сегодня</Text>
    </TouchableOpacity>
  );
};

export default Calendar;
