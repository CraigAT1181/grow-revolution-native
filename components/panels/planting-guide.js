import React from "react";
import { View, Text } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { colours, globalStyles } from "../../styles/global";

const PlantingGuide = ({ depth, spacing, rowDistance }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 10,
        marginBottom: 30,
      }}
    >
      {/* Depth Indicator */}
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 12, marginBottom: 5, color: colours.text }}>
          Depth
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <View style={{ marginRight: 10 }}>
            <FontAwesome5 name="seedling" size={20} color={colours.primary} />
          </View>
          <FontAwesome5 name="arrow-down" size={14} color={colours.primary} />
        </View>
        <Text style={{ fontSize: 20, color: colours.text }}>{depth}"</Text>
      </View>

      {/* Spacing Between Plants */}
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 12, marginBottom: 5, color: colours.text }}>
          Spacing
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <FontAwesome5 name="arrow-left" size={14} color={colours.primary} />

          <View style={{ marginHorizontal: 10 }}>
            <FontAwesome5 name="seedling" size={20} color={colours.primary} />
          </View>

          <FontAwesome5 name="arrow-right" size={14} color={colours.primary} />
        </View>
        <Text style={{ fontSize: 20, color: colours.text }}>{spacing}"</Text>
      </View>

      {/* Row Distance */}
      <View style={{ alignItems: "center", flexDirection: "column" }}>
        <Text style={{ fontSize: 12, marginBottom: 5, color: colours.text }}>
          Row distance
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <FontAwesome5 name="arrow-left" size={14} color={colours.primary} />
          <View
            style={{
              width: 20,
              height: 10,
              backgroundColor: colours.primary,
              marginHorizontal: 10,
            }}
          />
          <FontAwesome5 name="arrow-right" size={14} color={colours.primary} />
        </View>
        <Text style={{ fontSize: 20, color: colours.text }}>
          {rowDistance}"
        </Text>
      </View>
    </View>
  );
};

export default PlantingGuide;
