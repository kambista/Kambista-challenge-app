import { StyleSheet } from "react-native";

export const CheckboxStyleSheet = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 12,
    flexShrink: 1,
    flex: 1,
    width: "100%",
    gap: 4,
  },
  label: { alignItems: "center" },
  box: {
    marginRight: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 28,
    height: 28,
    borderRadius: 8,
    borderWidth: 2,
  },
  boxNoSelected: {
    borderColor: "#686868",
    backgroundColor: "#FFF",
  },
  boxSelected: {
    backgroundColor: "#E8F3FEBF",
    borderColor: "#456DD3",
  },
  boxError: {
    borderColor: "red",
  },
  labelError: {
    color: "red",
  },
});
