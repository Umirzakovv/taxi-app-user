import React, { useState } from "react";
import { Modal, Platform, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import HorizontalDivider from "../../reusable/HorizontalDivider";
import Select from "../../reusable/Select";
import { data } from "../../../mock/data";
import BookingModal from "../../ProfileScreen/BookingModal";
import Button from "../../reusable/Button";

import DateTimePicker from "@react-native-community/datetimepicker";
import Calendar from "../../reusable/Calendar";
import TouchableInput from "../TouchableInput";

const SearchModal = ({ navigation }) => {
  const [from, setFrom] = useState("");
  const [fromDistrict, setFromDistrict] = useState("");
  const [to, setTo] = useState("");
  const [toDistrict, setToDistrict] = useState("");
  const [modal, setModal] = useState(false);
  const [reservedSeats, setReservedSeats] = useState(1);
  const [date, setDate] = useState(new Date());

  return (
    <View style={styles.inputSearchModal}>
      <Select
        data={data}
        placeholder="Откуда"
        value={from}
        setValue={setFrom}
      />
      <HorizontalDivider />

      <Select
        data={from === "tashkent" ? data[0].district : data[1].district}
        placeholder="Выберите район"
        value={fromDistrict}
        setValue={setFromDistrict}
      />

      <HorizontalDivider />
      <Select data={data} placeholder="Куда" value={to} setValue={setTo} />
      <HorizontalDivider />
      <Select
        data={to === "tashkent" ? data[0].district : data[1].district}
        placeholder="Выберите район"
        value={toDistrict}
        setValue={setToDistrict}
      />
      <HorizontalDivider />
      <TouchableInput
        title="Количество бронируемых мест"
        value={reservedSeats}
        onPress={() => setModal(!modal)}
      />

      <Button
        bgColor="#0f95ca"
        title="Поиск"
        onPress={() => navigation.navigate("OrdersListScreen")}
      />

      <Modal
        visible={modal}
        onRequestClose={() => setModal(false)}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <BookingModal
          modal={modal}
          setModal={setModal}
          reservedSeats={reservedSeats}
          setReservedSeats={setReservedSeats}
        />
      </Modal>
    </View>
  );
};

export default SearchModal;
