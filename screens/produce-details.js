import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";

const ProduceDetails = ({ route }) => {
  const { produceItem } = route.params;

  return (
    <View style={globalStyles.screen}>
      <Text style={[globalStyles.titleText, styles.title]}>
        {produceItem.name[0].toUpperCase() + produceItem.name.slice(1)}
      </Text>
    </View>
  );
};

export default ProduceDetails;

const styles = StyleSheet.create({
  title: {
    marginLeft: 30,
    marginTop: -2,
  },
});
