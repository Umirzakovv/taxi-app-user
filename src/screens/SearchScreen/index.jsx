import React from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import SearchModal from "../../components/SearchScreen/SearchModal";
import { styles } from "./style";

const SearchScreen = ({ navigation }) => {
  const screenHeight = Dimensions.get("window").height;
  return (
    <ScrollView style={[styles.container, { height: screenHeight }]}>
      <View>
        <Text style={styles.screenTitle}>Поездки на ваш выбор</Text>
        <Text style={styles.screenTitle}>по самым низким</Text>
        <Text style={styles.screenTitle}>ценам</Text>
      </View>
      <SearchModal navigation={navigation} />
    </ScrollView>
  );
};

export default SearchScreen;
