import React from "react";
import { View, Text } from "react-native";
import ProduceBar from "../components/menu-bars/produce-bar";
import { globalStyles } from "../styles/global";

const SowDetails = ({ route }) => {
  const { sowItem } = route.params;
  console.log(sowItem);

  return (
    <View style={globalStyles.screen}>
      <Text style={globalStyles.paragraph}>{sowItem.description}</Text>
      <ProduceBar produce={sowItem.produce} />
    </View>
  );
};

export default SowDetails;
