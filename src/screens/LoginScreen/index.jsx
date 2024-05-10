import React, { useState } from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../../global-css";
import Input from "../../components/reusable/Input";
import { styles } from "./styles";
import Button from "../../components/reusable/Button";

const LoginScreen = () => {
  const [username, onChangeText] = useState("");
  const [password, onChangePassword] = useState("");

  const onPressSubmitBtn = () => {
    console.log(username, password);
  };

  return (
    <View style={globalStyles.mainContainer}>
      <Text style={[globalStyles.mainTitle, { marginVertical: 50 }]}>
        Авторизация
      </Text>
      <Text style={[globalStyles.mainSubTitle, { marginBottom: 50 }]}>
        Пожалуйста, войдите, чтобы продолжить
      </Text>
      <View style={styles.inputsWrapper}>
        <Input
          label="Юзернейм"
          placeholder=""
          value={username}
          onChangeText={onChangeText}
        />
        <Input
          label="Пароль"
          placeholder=""
          value={password}
          onChangeText={onChangePassword}
        />
        <Button
          title="Подтвердить"
          bgColor="#0f95ca"
          onPress={onPressSubmitBtn}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
