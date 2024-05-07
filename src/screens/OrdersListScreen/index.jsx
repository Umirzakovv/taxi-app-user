import React from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import OrderCard from "../../components/reusable/OrderCard";
import { globalStyles } from "../../global-css";

const OrdersListScreen = ({ navigation }) => {
  return (
    <ScrollView style={globalStyles.mainContainer}>
      <Text style={styles.title}>Поездки по вашему запросу</Text>
      <View>
        <OrderCard onPress={() => navigation.navigate("OrderSingleScreen")} />
      </View>
    </ScrollView>
  );
};

export default OrdersListScreen;
