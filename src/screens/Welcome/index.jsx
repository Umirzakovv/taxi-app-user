import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { globalStyles } from "../../global-css";

const Welcome = () => {
  return (
    <View style={globalStyles.mainContainer}>
      <Text style={globalStyles.mainTitle}>Добро пожаловать</Text>
      <Text style={[globalStyles.mainSubTitle, { marginTop: 10 }]}>
        Что бы совершить поездки, сначала авторизуйся
      </Text>
      <View style={styles.imageWrapper}>
        <Image
          source={require("../../../assets/car.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Авторизация</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
