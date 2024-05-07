import React from "react";
import { ScrollView, Text, View } from "react-native";
import Header from "../../components/ProfileScreen/Header";
import { styles } from "./style";
import Body from "../../components/ProfileScreen/Body";
import { globalStyles } from "../../global-css";

const ProfileScreen = () => {
  return (
    <ScrollView style={[globalStyles.mainContainer, { backgroundColor: "#131514"}]}>
      <View style={styles.container}>
        <Header />
        <Body />
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
