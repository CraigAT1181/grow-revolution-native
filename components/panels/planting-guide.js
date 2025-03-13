import React from "react";
import { View, Text } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { theme } from "../../styles/global";

const PlantingGuide = ({ depth, spacing, rowDistance }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 10,
        marginBottom: 30,
        backgroundColor: "#F5F5F5",
      }}
    >
      {/* Depth Indicator */}
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            fontSize: 12,
            marginBottom: 5,
            color: theme.colors.textOnBackground,
          }}
        >
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
            <FontAwesome5
              name="seedling"
              size={20}
              color={theme.colors.secondary}
            />
          </View>
          <FontAwesome5
            name="arrow-down"
            size={14}
            color={theme.colors.secondary}
          />
        </View>
        <Text style={{ fontSize: 20, color: theme.colors.textOnBackground }}>
          {depth}"
        </Text>
      </View>

      {/* Spacing Between Plants */}
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            fontSize: 12,
            marginBottom: 5,
            color: theme.colors.textOnBackground,
          }}
        >
          Spacing
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <FontAwesome5
            name="arrow-left"
            size={14}
            color={theme.colors.secondary}
          />

          <View style={{ marginHorizontal: 10 }}>
            <FontAwesome5
              name="seedling"
              size={20}
              color={theme.colors.secondary}
            />
          </View>

          <FontAwesome5
            name="arrow-right"
            size={14}
            color={theme.colors.secondary}
          />
        </View>
        <Text style={{ fontSize: 20, color: theme.colors.textOnBackground }}>
          {spacing}"
        </Text>
      </View>

      {/* Row Distance */}
      <View style={{ alignItems: "center", flexDirection: "column" }}>
        <Text
          style={{
            fontSize: 12,
            marginBottom: 5,
            color: theme.colors.textOnBackground,
          }}
        >
          Row distance
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <FontAwesome5
            name="arrow-left"
            size={14}
            color={theme.colors.secondary}
          />
          <View
            style={{
              width: 20,
              height: 10,
              backgroundColor: theme.colors.secondary,
              marginHorizontal: 10,
            }}
          />
          <FontAwesome5
            name="arrow-right"
            size={14}
            color={theme.colors.secondary}
          />
        </View>
        <Text style={{ fontSize: 20, color: theme.colors.textOnBackground }}>
          {rowDistance}"
        </Text>
      </View>
    </View>
  );
};

export default PlantingGuide;
