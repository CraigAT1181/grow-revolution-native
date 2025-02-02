import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

const SecondaryButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SecondaryButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#260F07",
    paddingVertical: 14,
    paddingHorizontal: 10,
    marginHorizontal: 50,
    backgroundColor: "white",
  },
  buttonText: {
    color: "#260F07",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});
