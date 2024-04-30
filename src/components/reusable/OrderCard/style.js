import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: "#262a2b",
    padding: 15,
    borderRadius: 15,
  },

  contentWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  timeWrapper: {
    gap: 5,
  },
  driverWrapper: {
    marginTop: 30,
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: "#fff",
    fontWeight: "600",
  },
  timeSecondaryText: {
    color: "grey",
  },

  usersWrapper: {
    flexDirection: "row",
  },
  icon: {
    backgroundColor: "#55b55d",
    padding: 5,
    paddingHorizontal: 8,
    borderRadius: 20,
  },
});
