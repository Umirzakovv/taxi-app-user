import React from "react";
import { Dimensions, Text, View } from "react-native";
import IconButton from "../../reusable/IconButton";
import { styles } from "./styles";
import Button from "../../reusable/Button";

const BookingModal = ({ modal, setModal, reservedSeats, setReservedSeats }) => {
  const screenHeight = Dimensions.get("window").height;
  const handleBookingPress = () => {
    setModal(!modal);
  };
  const handlePlusPress = () => {
    if (reservedSeats < 4) {
      setReservedSeats(reservedSeats + 1);
    }
  };
  const handleMinusPress = () => {
    if (reservedSeats > 1) {
      setReservedSeats(reservedSeats - 1);
    }
  };
  return (
    <View style={[styles.modalView, styles.shadow, { height: screenHeight }]}>
      <IconButton
        name="xmark"
        color="#0f95ca"
        size={40}
        onPress={handleBookingPress}
      />
      <Text style={styles.modalText}>Количество бронируемых мест</Text>
      <View style={styles.bookingNumberWrapper}>
        <IconButton
          name="circle-minus"
          size={50}
          color="#0f95ca"
          onPress={handleMinusPress}
        />
        <Text style={styles.bookingNumber}>{reservedSeats}</Text>
        <IconButton
          name="circle-plus"
          size={50}
          color="#0f95ca"
          onPress={handlePlusPress}
        />
      </View>
      <Button
        title="Бронировать"
        bgColor="#0f95ca"
        onPress={() => setModal(false)}
      />
    </View>
  );
};

export default BookingModal;
