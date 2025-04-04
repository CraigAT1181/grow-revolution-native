import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { theme } from "../../styles/global";

const PrimaryButton = ({ text, onPress, loading }) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={loading}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    marginHorizontal: 50,
    marginVertical: 10,
    backgroundColor: theme.colors.primary,
  },
  buttonText: {
    color: theme.colors.textOnPrimary,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});
