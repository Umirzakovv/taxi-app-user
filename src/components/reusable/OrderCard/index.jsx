import React from "react";
import { Text, View } from "react-native";
import { styles } from "./style";
import Icon from "react-native-vector-icons/FontAwesome5";

const OrderCard = () => {
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.contentWrapper}>
        <View style={styles.innerWrapper}>
          <Text style={styles.text}>12:20</Text>
          <Text style={styles.timeSecondaryText}>9ч 10м</Text>
          <Text style={styles.text}>21:30</Text>
        </View>
        <View style={styles.innerWrapper}>
          <Text style={styles.text}>Ташкент</Text>
          <View style={styles.usersWrapper}>
            <Icon name="walking" color="#fff" style={styles.icon} />
            <Icon name="walking" color="#fff" style={styles.icon} />
            <Icon name="walking" color="#fff" style={styles.icon} />
          </View>
          <Text style={styles.text}>Наманган</Text>
        </View>
        <View>
          <Text style={styles.text}>150 000 сум</Text>
        </View>
      </View>

      <View style={styles.driverWrapper}>
        <Icon name="user-circle" color="#fff" size={20} />
        <Text style={{ fontSize: 20, color: "#fff", marginLeft: 10 }}>
          Азизов Азиз
        </Text>
      </View>
    </View>
  );
};

export default OrderCard;
