import React from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import OrderCard from "../../components/reusable/OrderCard";

const HistoryScreen = () => {
  const screenHeight = Dimensions.get("window").height;
  return (
    <ScrollView>
      <View
        style={{
          height: screenHeight,
          backgroundColor: "#131514",
          padding: 20,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
            color: "#fff",
            marginVertical: 20,
          }}
        >
          История поездки
        </Text>
        <View style={{ gap: 10 }}>
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </View>
      </View>
    </ScrollView>
  );
};

export default HistoryScreen;
