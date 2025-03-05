import React from "react";
import { View, Text } from "react-native";
import ProduceBar from "../components/menu-bars/produce-bar";
import { globalStyles } from "../styles/global";

const SowDetails = ({ route }) => {
  const { sowItem } = route.params;

  return (
    <View style={globalStyles.screen}>
      <View style={globalStyles.textContainer}>
        <Text style={globalStyles.textCentered}>{sowItem.description}</Text>
      </View>
      <ProduceBar produce={sowItem.produce} />
    </View>
  );
};

export default SowDetails;
