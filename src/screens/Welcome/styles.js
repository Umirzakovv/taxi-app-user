import { StyleSheet } from "react-native";
import COLORS from "../../consts/colors";

export const styles = StyleSheet.create({
  title: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
  imageWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginTop: 500,
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  buttonWrapper: {
    marginTop: 560,
  },
  button: {
    backgroundColor: COLORS.blue,
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
  },
});
