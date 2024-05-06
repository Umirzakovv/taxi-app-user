import React from "react";
import { Dimensions, Text, View } from "react-native";
const ChatScreen = () => {
  const screenHeight = Dimensions.get("window").height;
  return (
    <View style={[{ height: screenHeight, backgroundColor: "#131514" }]}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: "#fff", fontSize: 16 }}>
          В процессе разработки
        </Text>
      </View>
    </View>
  );
};

export default ChatScreen;
