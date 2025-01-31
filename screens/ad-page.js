import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/global";

const AdPage = () => {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.screen}>
        <Text style={globalStyles.titleText}>Ad Page screen.</Text>
      </View>
    </View>
  );
};

export default AdPage;
