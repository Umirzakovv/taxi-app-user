import React, { useState } from "react";
import { Modal, Text, View } from "react-native";
import { styles } from "./style";
import HorizontalDivider from "../reusable/HorizontalDivider";
import Select from "../reusable/Select";
import { data } from "../../mock/data";
import BookingModal from "../ProfileScreen/BookingModal";
import Button from "../reusable/Button";

const SearchModal = () => {
  const [from, setFrom] = useState("");
  const [fromDistrict, setFromDistrict] = useState("");
  const [to, setTo] = useState("");
  const [toDistrict, setToDistrict] = useState("");
  const [modal, setModal] = useState(false);
  const [reservedSeats, setReservedSeats] = useState(1);

  console.log(
    `from-${from}, fromDistrict-${fromDistrict}, to-${to}, toDistrict-${toDistrict}`
  );
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
      <View style={styles.orderView}>
        <Text style={styles.text} onPress={() => setModal(!modal)}>
          Количество бронируемых мест
        </Text>
        <Text
          style={[styles.text, { color: "#fff" }]}
          onPress={() => setModal(!modal)}
        >
          {reservedSeats}
        </Text>
      </View>
      {/* <HorizontalDivider /> */}
      <Button bgColor="#0f95ca" title="Бронировать"/>
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
