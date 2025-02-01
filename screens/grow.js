import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import { FlatList } from "react-native-gesture-handler";

const Grow = () => {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.screen}>
        {/* Month button slider */}
        <View>
          <FlatList data={null} keyExtractor={null} renderItem={null} />
        </View>
      </View>
    </View>
  );
};

export default Grow;

const styles = StyleSheet.create({});
