import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { colours, globalStyles } from "../../styles/global";

const ToggleViewButton = ({ title, showGrid, setShowGrid }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowGrid(!showGrid)}
      >
        <Text style={globalStyles.text}>{title}</Text>
        <FontAwesome5
          name={showGrid ? "chevron-up" : "chevron-down"}
          size={16}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "start",
    marginVertical: 20,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: colours.background,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: colours.text,
    marginRight: 20,
  },
  content: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    width: "90%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  contentText: {
    fontSize: 16,
    color: "#333",
  },
});

export default ToggleViewButton;
