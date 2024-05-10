import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../../global-css";
import Input from "../../components/reusable/Input";
import { styles } from "./styles";
import Button from "../../components/reusable/Button";
import { MainContext } from "../../context";

const LoginScreen = () => {
  const authUrl = "https://taxi.coachingzona.uz/api/v1/Auth/signIn";
  const [username, onChangeText] = useState("");
  const [password, onChangePassword] = useState("");
  const { token, setToken } = useContext(MainContext);

  const onPressSubmitBtn = () => {
    fetch(authUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => setToken(data.token));
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
