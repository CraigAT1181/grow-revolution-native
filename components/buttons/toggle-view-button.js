import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { theme } from "../../styles/global";

const ToggleViewButton = ({ title, showContainer, setShowContainer }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowContainer(!showContainer)}
      >
        <View>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
        <View>
          <FontAwesome5
            name={showContainer ? "chevron-up" : "chevron-down"}
            size={16}
            style={styles.icon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ToggleViewButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "start",
    marginVertical: 20,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.colors.background,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: theme.colors.textOnBackground,
    fontFamily: "nunito-SemiBold",
    fontSize: 18,
  },
  icon: {
    color: theme.colors.textOnBackground,
  },
});
