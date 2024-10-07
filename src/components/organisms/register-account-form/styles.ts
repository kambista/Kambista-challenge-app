import { StyleSheet } from "react-native";

export const RegisterAccountFormStyleSheet = StyleSheet.create({
  checkbox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxBold: {
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
  },
  commonText: {
    alignItems: "center",
    marginTop: 4,
  },
  button: {
    borderRadius: 4,
    color: "#060F26",
    height: 50,
  },

  style_moneyButtonSelected: {
    borderRadius: 12,
    flex: 1,
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  contentStyle_moneyButtonSelected: {
    borderRadius: 12,
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
