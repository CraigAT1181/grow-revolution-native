import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";

const ProduceDetails = ({ route }) => {
  const { produceItem } = route.params;

  return (
    <View style={globalStyles.screen}>
      <Text style={globalStyles.titleText}>
        {produceItem.name.toUpperCase()}
      </Text>
    </View>
  );
};

export default ProduceDetails;
