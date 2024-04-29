import React from "react";
import { Text, View } from "react-native";
import { styles } from "./style";

const Body = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Данные пользователя</Text>
      <View style={styles.textWrapper}>
        <Text style={styles.textColor}>Email</Text>
        <Text style={styles.text}>muhammadyosinumirzakov601@gmail.com</Text>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.textColor}>Телефон</Text>
        <Text style={styles.text}>+998 99 300 23 99</Text>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.textColor}>Фото профиля</Text>
        <Text style={styles.text}>Добавить</Text>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.textColor}>Информации о себе</Text>
        <Text style={styles.text}>Добавить</Text>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.textColor}>Паспортные данные</Text>
        <Text style={styles.text}>Добавить</Text>
      </View>
    </View>
  );
};

export default Body;
