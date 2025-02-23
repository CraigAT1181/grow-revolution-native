import React from "react";
import { View, Text } from "react-native";
import { useGrow } from "../../contexts/GrowContext";
import { globalStyles } from "../../styles/global";
import { FlatList } from "react-native-gesture-handler";

const AtAGlance = () => {
  const { atAGlance } = useGrow();

  return (
    <View>
      <View style={{ alignItems: "center" }}>
        <Text style={globalStyles.titleText}>Jobs to do:</Text>
      </View>
      {atAGlance.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
};

export default AtAGlance;
