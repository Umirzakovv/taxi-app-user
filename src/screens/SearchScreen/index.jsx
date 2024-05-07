import React from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import SearchModal from "../../components/SearchScreen/SearchModal";
import { styles } from "./style";
import { globalStyles } from "../../global-css";

const SearchScreen = ({ navigation }) => {
  return (
    <ScrollView style={globalStyles.mainContainer}>
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
