import React from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import OrderCard from "../../components/reusable/OrderCard";
import { globalStyles } from "../../global-css";

const HistoryScreen = () => {
  const screenHeight = Dimensions.get("window").height;
  return (
    <ScrollView>
      <View
        style={[globalStyles.mainContainer, {
          height: screenHeight,
          backgroundColor: "#131514",
        }]}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
            color: "#fff",
            marginBottom: 20
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
