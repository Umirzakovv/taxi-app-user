import React from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import Header from "../../components/ProfileScreen/Header";
import { styles } from "./style";
import Body from "../../components/ProfileScreen/Body";

const ProfileScreen = () => {
  const screenHeight = Dimensions.get("window").height;
  return (
    <ScrollView style={{ height: screenHeight, backgroundColor: "#131514"}}>
      <View style={styles.container}>
        <Header />
        <Body />
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
