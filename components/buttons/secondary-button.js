import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { colours } from "../../styles/global";

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
    borderColor: colours.primary,
    paddingVertical: 14,
    paddingHorizontal: 10,
    marginHorizontal: 50,
    backgroundColor: colours.white,
  },
  buttonText: {
    color: colours.primary,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});
