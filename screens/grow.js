import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import { FlatList } from "react-native-gesture-handler";

const Grow = () => {
  return (
    <View style={globalStyles.screen}>
      <Text style={globalStyles.text}>Grow screen</Text>
    </View>
  );
};

export default Grow;

const styles = StyleSheet.create({});
