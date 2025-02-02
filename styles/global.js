import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  screen: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  form: {
    flex: 1,
  },
  titleText: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    color: "#333",
  },
  text: {
    fontFamily: "nunito-regular",
    fontSize: 18,
    color: "#333",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
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
