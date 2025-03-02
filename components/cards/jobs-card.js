import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colours, globalStyles } from "../../styles/global";

const JobsCard = ({ title, content }) => {
  return (
    <View style={styles.card}>
      <Text style={globalStyles.titleTextCentered}>{title}</Text>
      <Text style={globalStyles.paragraph}>{content}</Text>
    </View>
  );
};

export default JobsCard;

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginVertical: 10,
  },
});
