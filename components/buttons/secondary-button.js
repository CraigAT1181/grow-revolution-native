import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { theme } from "../../styles/global";

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
    borderRadius: 25,
    borderWidth: 1,
    borderColor: theme.colors.secondary,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.secondary,
  },
  buttonText: {
    color: theme.colors.textOnPrimary,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});
