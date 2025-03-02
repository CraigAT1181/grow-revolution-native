import { StyleSheet } from "react-native";

export const colours = {
  primary: "#116530",
  secondary: "#2c2c2c",
  background: "#F5F5F5",
  transparent: "transparent",
  text: "#212121",
  white: "#FFFFFF",
  black: "#000000",
  danger: "#FF5252",
  success: "#4CAF50",
};

export const getAlternateBackground = (index) =>
  index % 2 === 0 ? colours.background : colours.white;

export const globalStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  screen: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: colours.white,
  },
  form: {
    flex: 1,
  },
  titleText: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    color: colours.text,
  },
  titleTextCentered: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    color: colours.text,
    textAlign: "center",
  },
  text: {
    fontFamily: "nunito-regular",
    fontSize: 16,
    color: colours.text,
  },
  textCentered: {
    fontFamily: "nunito-regular",
    fontSize: 16,
    color: colours.text,
    textAlign: "center",
  },

  smallText: {
    fontFamily: "nunito-regular",
    fontSize: 14,
    color: colours.text,
  },
  paragraph: {
    marginVertical: 12,
    lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: colours.secondary,
    padding: 10,
    textAlign: "center",
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    color: "#AA0808",
    marginBottom: 10,
    marginTop: 6,
    textAlign: "center",
  },
  authBottomButtonPanel: {
    marginTop: 50,
  },
  hrContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  hr: {
    width: "80%",
    height: 1,
    backgroundColor: "#000",
    marginVertical: 10,
  },
});
